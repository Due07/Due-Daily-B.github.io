import axios from '@/axios';
// 所有类目的接口
export default {
  list(params) {
    return axios.get('/category/all', { params });
  },
};
