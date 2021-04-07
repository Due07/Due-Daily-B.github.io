<template>
  <div class="search-box">
    <a-form-model layout="inline" :model="searchForm" @submit="handleSubmit" @submit.native.prevent>
      <a-form-model-item label="检索关键字">
        <a-input v-model="searchForm.searchWord" placeholder="请输入关键字"></a-input>
      </a-form-model-item>
      <a-form-model-item label="商品类目">
        <a-select show-search placeholder="请选择商品类目"
        style="width: 200px" @change="handleChange" allowClear>
          <a-select-option v-for="cat in categoryList"
          :key="cat.id" :value="cat.id">{{cat.name}}</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" html-type="submit">搜索</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>

export default {
  props: ['categoryList'],
  data() {
    return {
      searchForm: {
        searchWord: '',
        category: '',
      },

    };
  },
  created() {

  },
  methods: {
    // 提交表单
    handleSubmit() {
      // 自定义事件 ----子组件给父组件传递数据
      this.$emit('submit', this.searchForm);
    },
    // 提交类目
    handleChange(val) {
      // console.log(val);
      this.searchForm.category = val;
    },
  },
};
</script>
<style scoped>
.search-box{
    margin: 10px 0 10px 40px;
    display: inline-block;
}
</style>
