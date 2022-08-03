<template>
  <div class="common-layout">
    <el-container style="overflow-y;'hidden'">
      <commonAside />
      <el-container>
        <el-header style="background-color: rgb(173, 202, 255)"
          ><CommonHeader
          
        /></el-header>
        <commonTags></commonTags>
        <el-main><router-view /> </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/commonHeader.vue";
import commonAside from "../components/Aside.vue";
import commonTags from "../components/Tags.vue";
export default defineComponent({
  components: {
    CommonHeader,
    commonAside,
    commonTags,

  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scope>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside{
      height: 100%;
      background-color: #545c64;
    }
  }
}
</style>
