<template>
    <!-- v-if="state.showMenu" -->
    <el-aside class="aside">
      <div class="head">
        <div>
          <span>vue3 admin</span>
        </div>
      </div>
      <div class="line" />
      <!-- :default-openeds="state.defaultOpen" -->
      <!-- :default-active="state.currentPath" -->
      <el-menu background-color="#222832" text-color="#fff" :router="true">
        <el-submenu index="1">
          <template #title>
            <span>Dashboard</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/introduce"
              ><i class="el-icon-data-line" />系统介绍</el-menu-item
            >
            <el-menu-item index="/dashboard"
              ><i class="el-icon-odometer" />Dashboard</el-menu-item
            >
            <el-menu-item index="/add"
              ><i class="el-icon-plus" />添加商品</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template #title>
            <span>首页配置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/swiper"
              ><i class="el-icon-picture" />轮播图配置</el-menu-item
            >
            <el-menu-item index="/hot"
              ><i class="el-icon-star-on" />热销商品配置</el-menu-item
            >
            <el-menu-item index="/new"
              ><i class="el-icon-sell" />新品上线配置</el-menu-item
            >
            <el-menu-item index="/recommend"
              ><i class="el-icon-thumb" />为你推荐配置</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template #title>
            <span>模块管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/category"
              ><i class="el-icon-menu" />分类管理</el-menu-item
            >
            <el-menu-item index="/good"
              ><i class="el-icon-s-goods" />商品管理</el-menu-item
            >
            <el-menu-item index="/guest"
              ><i class="el-icon-user-solid" />会员管理</el-menu-item
            >
            <el-menu-item index="/order"
              ><i class="el-icon-s-order" />订单管理</el-menu-item
            >
            <el-menu-item index="/order"
              ><i class="el-icon-s-order" />订单管理</el-menu-item
            >
            <el-menu-item index="/order"
              ><i class="el-icon-s-order" />订单管理</el-menu-item
            >
            <el-menu-item index="/order"
              ><i class="el-icon-s-order" />订单管理</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template #title>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/account"
              ><i class="el-icon-lock" />修改密码</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <!-- <el-container v-else class="container">
      <router-view />
    </el-container> -->
</template>

<script>
import { onUnmounted, reactive } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const noMenu = ["/login"];
    const router = useRouter();
    const state = reactive({
      defaultOpen: ["1", "2", "3", "4"],
      showMenu: true,
      currentPath: "/dashboard",
      count: {
        number: 1,
      },
    });
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
  },
};
</script>

<style scoped>
.aside {
  width: 12.5rem !important;
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.aside::-webkit-scrollbar {
  display: none;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 3.125rem;
  height: 3.125rem;
  margin-right: 0.625rem;
}
.head span {
  font-size: 1.25rem;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

</style>
<style>
.el-menu {
  border-right: none !important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^="el-icon-"] {
  vertical-align: -1px !important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 1.25rem;
}
.el-popper__arrow {
  display: none;
}
</style>
