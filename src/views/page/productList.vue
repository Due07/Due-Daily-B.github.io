<template>
  <div class="productList">
    <!-- 搜索 -->
    <search-box @submit="searchSubmit" :categoryList="categoryList" />
    <a-button class="product-add-btn">
      <router-link :to="{name:'ProductAdd'}">添加商品</router-link>
    </a-button>
    <!-- 列表 -->
    <product-table :data="tableData" :page="page" @change="change"
                   :categoryList="categoryList"
                   @edit="editProduct"
                   @remove="removeProduct"/>
  </div>
</template>
<script>
import searchBox from '@/components/search.vue';
import productTable from '@/components/productsTable.vue';
import api from '@/api/product';
import categoryApi from '@/api/category';

export default {
  data() {
    return {
      tableData: [],
      searchForm: {},
      categoryList: [],
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
      categoryObj: {},
    };
  },
  components: {
    searchBox,
    productTable,
  },
  methods: {
    // 搜索按钮
    searchSubmit(form) {
      this.searchForm = form;
      // console.log(form);
      this.getTableData();
    },
    // 列表获取数据
    getTableData() {
      api
        .list({
          page: this.page.current,
          size: this.page.pageSize,
          ...this.searchForm,
        })
        .then((res) => {
          // console.log(res);
          // 把数据传递到组件里面去
          this.page.total = res.total;
          this.tableData = res.data.map((item) => ({
            ...item,
            categoryName: this.categoryObj[item.category].name,
          }));
        });
      console.log(this.categoryObj);
    },

    // 点击分页
    change(page) {
      this.page = page;
      this.getTableData();
    },
    // 点击编辑
    editProduct(record) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          id: record.id,
        },
      });
    },
    // 点击删除
    removeProduct(record) {
      this.$confirm({
        title: '确认删除',
        content: () => <div style="color:red;">{`确认删除${record.title}这件商品吗？`}</div>,
        onOk: () => {
          api.remove({
            id: record.id,
          }).then(() => {
            this.$message.success('删除成功!');
            this.getTableData();
          });
        },
        onCancel() {
          console.log('取消');
        },
        class: 'confirm-box',
      });
    },
  },
  async created() {
    await categoryApi.list().then((res) => {
      //   console.log(res);
      //   下拉列表数据
      this.categoryList = res.data;
      res.data.forEach((element) => {
        this.categoryObj[element.id] = element;
      });
    });
    this.getTableData();
  },
};
</script>
<style lang='less'>
    .product-add-btn{
      float: right;
      right: 20px;
      top: 14px;
      &::before{
        content: '';
        clear: both;
        display: block;
      }
    }
    .ant-table-wrapper{
      table{
      text-align: center;
        th{
          text-align: center;
        }
      }
    }
</style>
