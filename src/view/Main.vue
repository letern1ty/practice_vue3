<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <CommonHeader />
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/commonHeader.vue";
export default defineComponent({
  components: {
    CommonHeader,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
