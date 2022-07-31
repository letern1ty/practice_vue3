<template>
  <el-header>
    <div class="content1">
      <el-icon color="#409EFC" class="no-inherit" :size="20">
        <Share />
      </el-icon>
    </div>
    <div class="content2">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
            <el-dropdown-item divided>Action 6</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
el-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
