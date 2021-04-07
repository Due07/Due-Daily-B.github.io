import axios from '@/axios';

// 对于用户操作的接口管理
export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
