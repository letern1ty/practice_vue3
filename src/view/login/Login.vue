<template>
  <div class="login-body">
    <div class="login-container">
      <el-form
        label-position="left"
        :rules="rules"
        :model="ruleForm"
        ref="loginForm"
        class="login-form"
        size="large"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model.trim="ruleForm.username"
            autocomplete="off"
            placeholder="请输入账号...."
          ></el-input>
        </el-form-item>

        <el-form-item
          label="密码"
          prop="password"
          style="margin: 2rem 0 2rem 0"
        >
          <el-input
            type="password"
            v-model.trim="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码...."
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const loginForm = ref(null);
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: "true", message: "账户不能为空", trigger: "blur" },
        ],
        password: [
          { required: "true", message: "密码不能为空", trigger: "blur" },
        ],
      },
    });
    const submitForm = () => {
      const token = Mock.random.guid();
      store.commit("setToken", token);
      router.push({
        name: "home",
      });
      // loginForm.value.validate((valid) => {
      //   if (valid) {
      //     axios
      //       .post("/adminUser/login", {
      //         userName: state.ruleForm.username || "",
      //         passwordMd5: md5(state.ruleForm.password),
      //       })
      //       .then((res) => {
      //         localSet("token", res);
      //         window.location.href = "/";
      //       });
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    };
    const resetForm = () => {
      loginForm.value.resetFields();
    };
    return {
      ...toRefs(state),
      loginForm,
      submitForm,
      resetForm,
    };
  },
};
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(241, 241, 241);
}
.login-container {
  width: 26.25rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1.3125rem 2.5625rem 0px rgba(0, 0, 0, 0.2);
  padding: 3.125rem 0 3.125rem 0;
}

.login-form {
  width: 70%;
  margin: 0 auto;
}
</style>
<style>
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form .el-form-item {
  margin-bottom: 12px;
}
</style>
