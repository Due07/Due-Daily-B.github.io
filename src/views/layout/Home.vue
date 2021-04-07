<template>
  <div class="Home">
    <!-- 导航栏 -->
    <left-menu :key="key"></left-menu>
    <!-- 顶部main -->
    <div :class="{'main-app':true,'menu-unfold':$store.state.collapsed }">
    <head-menu></head-menu>
    <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/menu-list.vue';
import HeadMenu from './components/main-head.vue';

export default {
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    // 监听路由路径改变
    $route() {
      this.key = new Date().getTime();
    },
  },
  components: {
    LeftMenu,
    HeadMenu,
  },
};
</script>

<style lang="less">
//lang = 语法选择  less预处理器
@import url("~@/assets/css/Home.less");
</style>
