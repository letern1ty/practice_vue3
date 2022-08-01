<template>
  <div class="contain">
    <div class="content1">
      <el-button class="Hbutton" plain @click="changeCollapse">
        <el-icon color="#409EFC" class="no-inherit" :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <h3>首页</h3>
    </div>
    <div class="content2">
      <el-dropdown :trigger="click">
        <span class="el-dropdown-link">
          admin
          <img class="userImg" src="../assets/image/user.png" alt="" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item divided>Action 6</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    let store = useStore();
    const changeCollapse = () => {
      store.commit("updateIsCollapse");
    };
    return {changeCollapse};
  },
});
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: space-between;
  line-height: 3.75rem;
}
.content1 {
  display: flex;
  justify-content: space-between;
  width: 7.5rem;
  vertical-align: middle;
}
.el-dropdown-link {
  line-height: 3.75rem;
}
.userImg {
  height: 2.5rem;
  width: 2.5rem;
  vertical-align: middle;
}
.Hbutton {
  margin: auto 0;
}
.userImg {
  margin-left: 1rem;
}
</style>
