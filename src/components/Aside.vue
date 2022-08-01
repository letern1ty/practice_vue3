<template>
  <el-aside :width="$store.state.isCollapse ? '200px' : '64px'">
    <el-col>
      <h5 class="mb-2">后台管理系统菜单</h5>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        :collapse="!$store.state.isCollapse"
      >
        <el-menu-item
          :index="item.label"
          v-for="item in noChildren()"
          :key="item.path"
          @click="changeMenu(item)"
        >
          <component :is="item.icon" class="icons"></component>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-sub-menu
          :index="item.label"
          v-for="item in hasChildren()"
          :key="item.path"
        >
          <template #title>
            <component :is="item.icon" class="icons"></component>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item
              :index="subItem.path"
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              @click="changeMenu(subItem)"
              ><component :is="subItem.icon" class="icons"></component>
              <span>{{ subItem.label }}</span></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-aside>
</template>

<script>
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const router = useRouter();
    const list = [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "Apple",
        url: "home/home",
      },
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "UserManage/UserManage",
      },
      {
        path: "/others",
        name: "others",
        label: "其他",
        icon: "location",
        url: "others/others",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: "Setting",
            url: "page1/page1",
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: "Setting",
            url: "page2/page2",
          },
        ],
      },
    ];
    const noChildren = () => {
      return list.filter((item) => !item.children);
    };
    const hasChildren = () => {
      return list.filter((item) => item.children);
    };
    //el 菜单方法
    const handleOpen = (key, keyPath) => {
    };
    const handleClose = (key, keyPath) => {
    };

    // 路由跳转
    const changeMenu = (item) => {
      console.log(item);
      router.push({
        name: item.name,
      });
    };
    return { noChildren, hasChildren, handleClose, handleOpen, changeMenu };
  },
});
</script>

<style lang="scss" scoped>
.tac {
  width: 100%;
}
.icons {
  height: 1.125rem;
  width: 1.5rem;
  margin-right: 0.3125rem;
}
</style>

<style>
el-col {
  height: 100vh;
}

.mb-2 {
  font-size: 1.25rem;
  padding-left: 0.3125rem;
  height: 3.125rem;
  padding-top: 20px;
  color: aliceblue;
}
</style>
