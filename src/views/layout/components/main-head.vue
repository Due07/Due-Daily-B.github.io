<template>
  <div class="main-head">
    <a-button type="primary" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <!-- 初始化判断 没获取到不显示 -->
      <a-breadcrumb v-if="currentRoute.length>1">
        <a-breadcrumb-item>{{ currentRoute[0].meta.title }}</a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{name:currentRoute[1].name}">
            {{ currentRoute[1].meta.title }}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        {{ $store.state.user.username}}
        <a-icon type="down" />
      </li>
      <li @click="logout">退出</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentRoute: [],
    };
  },
  watch: {
    $route: {
      handler() {
        this.currentRoute = this.$router.currentRoute.matched;
      },
      immediate: true,
    },
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$store.dispatch('logout');
      this.$message.success('退出成功！');
      setTimeout(() => {
        this.$router.push({
          name: 'Login',
        });
      }, 1000);
    },
  },
};
</script>
