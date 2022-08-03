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
    <el-col :span="16" style="margin-top: 1.25rem">
      <div class="num">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          v-for="item in countData"
          :key="item.name"
        >
          <el-row>
            <component
              :is="item.icon"
              class="icons"
              :style="{ background: item.color, fontSize: '1.8rem' }"
            ></component>
            <div class="details">
              <el-col>
                <p class="count">￥{{ item.value }}</p>
                <p class="txt">{{ item.name }}</p>
              </el-col>
            </div>
          </el-row>
        </el-card>
      </div>
      <el-card style="height: 17.5rem">
        <div ref="echarts" style="height: 17.5rem"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  getCurrentInstance,
  reactive,
} from "vue";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    let tableData = ref([]);
    let countData = ref([]);
    const tableLabel = {
      name: "机型",
      todayBuy: "今日购买",
      monthBuy: "本月购买",
      totalBuy: "总购买",
    };
    const getTableList = async () => {
      //二次封装之后的axios
      tableData.value = await proxy.$http.getTableData();
    };

    const getCountData = async () => {
      //二次封装之后的axios
      countData.value = await proxy.$http.getCountData();
      let res = await proxy.$http.getCountData();
      console.log(res);
    };

    //echarts 渲染

    let xOptions = reactive({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    });
    let pieOptions = reactive({
      title: {
        text: "Referer of a Website",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
    let orderData = reactive({
      xData: [],
      series: [],
    });

    let userData = reactive({
      xData: [],
      series: [],
    })

    let videoData = reactive({
      series: [],
    })
    onMounted(() => {
      getTableList();
      getCountData();
    });
    return { tableData, tableLabel, countData, getCountData };
  },
});
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

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    width: 32%;
    margin-bottom: 1.25rem;
  }

  .icons {
    width: 5rem;
    font-size: 1.875rem;
    line-height: 5rem;
    color: #fff;
  }

  .details {
    margin-left: 1rem;
    .count {
      font-size: 2rem;
      margin-bottom: 0.625rem;
      color: #e22f2f;
    }
    .txt {
      color: #666;
      font-size: 0.75rem;
    }
  }
}
</style>
