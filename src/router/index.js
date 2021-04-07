import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import permission from '@/utils/permission';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);

// 解决报错 router 3.0以后 编程时导航报错
const originalPush = VueRouter.prototype.push;
// const originalReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
// replace
// VueRouter.prototype.replace = function push(location, onResolve, onReject) {
//     if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject);
//     return originalReplace.call(this, location).catch((err) => err);
// };
const ayncRouterMap = [{
  path: '/product',
  name: 'Product',
  meta: {
    title: '商品',
    icon: 'save',
    hidden: false,

  },
  component: Home,
  children: [{
    path: 'list',
    name: 'ProductList',
    meta: {
      title: '商品列表',
      icon: 'unordered-list',
      hidden: false,

    },
    component: () => import('@/views/page/productList.vue'),
  }, {
    path: 'add',
    name: 'ProductAdd',
    meta: {
      title: '添加商品',
      icon: 'file-add',
      hidden: false,

    },
    component: () => import('@/views/page/productAdd.vue'),
  },
  {
    path: 'edit/:id',
    name: 'ProductEdit',
    meta: {
      title: '编辑商品',
      icon: 'file-add',
      hidden: true,

    },
    component: () => import('@/views/page/productAdd.vue'),
  },
  {
    path: 'category',
    name: 'Category',
    meta: {
      title: '类目管理',
      icon: 'database',
      hidden: false,
    },
    component: () => import('@/views/page/category.vue'),
  },
  ],
}];

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: '/index',
  meta: {
    title: '首页',
    icon: 'home',
    hidden: false,
  },
  children: [{
    path: 'index',
    name: 'Index',
    meta: {
      title: '统计',
      icon: 'home',
      hidden: false,
    },
    component: () => import('../views/page/index.vue'),
  }],
},
{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    title: '登录',
    hidden: true,
  },
},
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

let isRou = false;

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      if (!isRou) {
        const menuRoutes = permission(store.state.user.role, ayncRouterMap);
        // addRoutes dispath 都是异步操作 返回Promise api形式
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          // router.addRoutes(menuRoutes);
          router.addRoute('menuRoutes', menuRoutes[0]);
          next();
        });
        // console.log(store.state.menuRoutes);
        isRou = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
