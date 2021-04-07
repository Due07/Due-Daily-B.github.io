<template>
  <a-table :columns="columns" :data-source="tableData" :pagination="page" @change="changeTable">
    <div slot="operation" slot-scope="text,record">
      <!-- 拿到你点击时哪一行的数据 slot-scope -->
      <a-button @click="editProduct(record)">编辑</a-button>
      <a-button @click="removeProduct(record)">删除</a-button>
    </div>
  </a-table>
</template>
<script>

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标签',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'categoryName',
    key: 'category',
    ellipsis: true,
  },

  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    customRender(text, record) {
      // console.log(text, record);
      return record.status === 1 ? '上架' : '下架';
    },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 200,
    scopedSlots: { customRender: 'operation' },
  },
];

export default {
  props: ['data', 'page'],
  data() {
    return {
      columns,
    };
  },
  methods: {
    changeTable(page) {
      // 点击分页 获取到的数据传递到父组件
      this.$emit('change', page);
    },
    // 编辑
    editProduct(record) {
      this.$emit('edit', record);
    },
    // 删除
    removeProduct(record) {
      // console.log(record);
      this.$emit('remove', record);
    },
  },
  computed: {
    tableData() {
      //   给每一个组件添加一个id
      return this.data.map((item) => ({ ...item, key: item.id }));
    },
  },
};
</script>
