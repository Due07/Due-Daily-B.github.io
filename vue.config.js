module.exports = {
  // vue-cli 设置代理解决跨域 ----但是 axios 有设置主地址 baseURL 不生效
  // devServer: {
  //     proxy: {
  //         '/api': { // 这里最好有一个 /
  //             target: 'https://mallapi.duyiedu.com', // 后台接口域名
  //             ws: true, // 如果要代理 websockets，配置这个参数
  //             secure: false, // 如果是https接口，需要配置这个参数
  //             changeOrigin: true, // 是否跨域
  //             pathRewrite: {
  //                 '^/api': '',
  //             },
  //         },
  //     },
  // },
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
