<template>
  <div class="contain">
    <div class="content1">
      <el-icon color="#409EFC" class="no-inherit" :size="20">
        <Share />
      </el-icon>
    </div>
    <div class="content2">
      <el-dropdown :hide-on-click="false" :trigger="contextmenu">
        <span class="el-dropdown-link">
          Dropdown List
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
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: space-between;
  line-height: 3.75rem;
}
.el-dropdown-link {
  line-height: 3.75rem;
}
.userImg {
  height: 2.5rem;
  width: 2.5rem;
  vertical-align: middle;
}
</style>
