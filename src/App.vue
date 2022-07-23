<script>
import Menu from "./components/menu.vue";

export default {
  components: {
    Menu,
  },
  setup() {},
};
</script>

<template>
  <el-container class="container">
    <Menu></Menu>
    <el-container class="content">
      <!-- <Header /> -->
        <router-view />
    </el-container>
    <!-- <Footer /> -->
  </el-container>
</template>

<style scoped>
.container {
  height: 100vh;
  background-color: #fafafa;
  width: 100vw;
  display: flex;
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
  padding: 0.625em;
}
</style>
