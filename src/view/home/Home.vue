<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 1.25rem">
      <el-card shadow="hower">
        <div class="user">
          <img src="../../assets/image/user.png" alt="" />
          <div class="userinfo">
            <p>admin</p>
            <div class="role">管理员</div>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-7-1</span></p>
          <p>上次登录地点：<span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hower" style="margin-top: 1.25rem; height: 21.875rem">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import axios from "axios";
export default {
  setup() {
    const tableData = [
      {
        name: "华为",
        todayBuy: "1000",
        monthBuy: "6500",
        totalBuy: "12000",
      },
      {
        name: "小米",
        todayBuy: "1200",
        monthBuy: "10000",
        totalBuy: "15000",
      },
      {
        name: "苹果",
        todayBuy: "1500",
        monthBuy: "20000",
        totalBuy: "30000",
      },
      {
        name: "三星",
        todayBuy: "400",
        monthBuy: "2000",
        totalBuy: "3000",
      },
      {
        name: "oppo",
        todayBuy: "400",
        monthBuy: "2000",
        totalBuy: "3000",
      },
      {
        name: "vivo",
        todayBuy: "400",
        monthBuy: "2000",
        totalBuy: "3000",
      },
      {
        name: "一加",
        todayBuy: "400",
        monthBuy: "2000",
        totalBuy: "3000",
      },
    ];
    const tableLabel = {
      name: "机型",
      todayBuy: "今日购买",
      monthBuy: "本月购买",
      totalBuy: "总购买",
    };
    const getTableList = async () => {
      await axios.get("/home/getData").then((res) => {
        console.log(res);
      });
    };
    onMounted(() => {
      getTableList();
    });
    return { tableData, tableLabel };
  },
};
</script>

<style lang="scss" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    img {
      width: 6.25rem;
      height: 6.25rem;
      border-radius: 50%;
      margin-right: 2.5rem;
    }
  }
  .login-info {
    p {
      line-height: 1.875rem;
      font-size: 0.875rem;
      color: #999;
      span {
        color: #666;
        margin-left: 2.5rem;
      }
    }
  }
}
</style>
