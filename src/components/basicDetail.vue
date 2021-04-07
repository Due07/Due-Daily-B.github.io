<template>
  <div class="basic-detail">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="{span:5}"
      :wrapper-col="{span:13}"
    >
      <a-form-model-item ref="name" label="标题" required prop="title">
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item label="商品描述" prop="desc">
        <a-input v-model="form.desc" />
      </a-form-model-item>
      <a-form-model-item label="商品类目" required prop="category">
        <a-select
          v-model="form.category"
          placeholder="请选择商品类别"
          @change="changeCategory(form.category)"
        >
          <a-select-option v-for=" cat in categoryList" :key="cat.id"
          :value="cat.id">{{cat.name}}</a-select-option>
        </a-select>
        <a-select v-model="form.c_item" placeholder="请添加子类目">
          <a-select-option v-for=" cat in categoryItems" :key="cat"
          :value="cat">{{cat}}</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="商品标签" prop="tags" required>
        <a-select mode="tags" style="width: 100%"
        placeholder="请选择标签" :default-value="['包邮，最晚次日达']"
         v-model="form.tags">
          <a-select-option value="包邮，最晚次日达">
              包邮，最晚次日达</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label=" " class="next-btn">
        <a-button type="primary" @click="next">下一步</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import categoryItemsApi from '@/api/category';

export default {
  props: ['form'],
  data() {
    return {
      rules: {},
      categoryList: [],
      categoryItems: [],
    };
  },
  methods: {
    changeCategory(category) {
      for (let i = 0; i < this.categoryList.length; i += 1) {
        if (this.categoryList[i].id === category) {
          this.categoryItems = this.categoryList[i].c_items;
        }
      }
    },
    next() {
    //   console.log(this.form);
    // 表单校验
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
  },
  created() {
    categoryItemsApi.list().then((res) => {
    //   console.log(res);
      this.categoryList = res.data;
    });
  },
};
</script>
<style lang="less">
.basic-detail,.sale-detail {
  .next-btn {
    text-align: center;
    div.ant-col-5 {
        label{
                &::before{
                content: '';
            }
            &::after{
                content: '';
            }
        }
    }
  }
}
</style>
