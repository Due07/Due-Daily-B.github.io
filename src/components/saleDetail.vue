<template>
  <div class="sale-detail">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="{span:5}"
      :wrapper-col="{span:13}"
    >
      <a-form-model-item ref="name" label="商品售价" required prop="price">
        <a-input v-model="form.price" />
      </a-form-model-item>
      <a-form-model-item label="折扣价格" prop="price_off">
        <a-input v-model="form.price_off" />
      </a-form-model-item>
      <a-form-model-item label="商品库存" required prop="inventory">
        <a-input v-model="form.inventory" />
      </a-form-model-item>
      <a-form-model-item label="计量单位" prop="unit" required>
        <a-input v-model="form.unit" />
      </a-form-model-item>
      <a-form-model-item label="商品相册" prop="images">
        <a-upload
          :action="'http://mallapi.duyiedu.com/upload/images?appkey='+$store.state.user.appkey"
          list-type="picture-card"
          :file-list="fileList"
          status="done"
          @preview="handlePreview"
          @change="handleChange"
          name="avatar"
        >
          <div v-if="fileList.length < 8">
            <a-icon :type="loading? 'loading':'plus'" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
      </a-form-model-item>
      <a-form-model-item label=" " class="next-btn">
        <a-button type="primary" @click="prev">上一步</a-button>
        <a-button type="primary" @click="next">提交</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: ['form'],
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      rules: {},
      fileList: [],
      loading: false,
    };
  },
  created() {
    if (this.form.images.length > 0) {
      this.fileList = this.form.images.map((res, index) => ({
        uid: this.form.id + index,
        name: `${this.form.id + index}.png`,
        status: 'done',
        url: res,
      }));
    }
  },
  methods: {
    handleChange({ file, fileList, event }) {
      console.log('---', file, fileList, event);
      if (file.status === 'done') {
        this.form.images.push(file.response.data.url);
      } else if (file.status === 'removed') {
        const { url } = file.response.data;
        this.form.images = this.form.images.filter((item) => item !== url);
        // console.log(this.form.images)
      }
      this.fileList = fileList;
    },
    async handlePreview(file) {
      const fil = file;
      if (!file.url && !file.preview) {
        fil.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    prev() {
      this.$emit('prev', this.form);
    },
    next() {
      // 表单校验
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const th = this;
          setTimeout(() => {
            th.$emit('next', this.form);
          }, 1200);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    // 关闭预览
    handleCancel() {
      this.previewVisible = false;
    },
  },
};
</script>
