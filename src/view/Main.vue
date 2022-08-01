<template>
  <div class="common-layout">
    <el-container>
      <el-aside style="width: 12.5rem; height: 100vh"><commonAside /></el-aside>
      <el-container>
        <el-header style="background-color: rgb(173, 202, 255);"><CommonHeader /></el-header>

        <el-main><router-view /> </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/commonHeader.vue";
import commonAside from "../components/Aside.vue";
export default defineComponent({
  components: {
    CommonHeader,
    commonAside,
  },
  setup() {
    return {};
  },
});
</script >
<style scope>

</style>
