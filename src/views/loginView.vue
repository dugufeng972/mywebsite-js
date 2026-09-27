<template>
  <div class="login">
    <div class="content">
      <div class="lg">
        <h3>登录小说精品屋</h3>
        <el-input v-model="uname" placeholder="用户名" :prefix-icon="User" />
        <el-input v-model="passwd" placeholder="密码" :prefix-icon="Lock" />
        <div class="inp"><input type="checkbox" />下次自动登录</div>
        <button @click="login">登录</button>
      </div>
      <div class="reg">
        <p>还没有注册账号？</p>
        <button @click="goRegister">立即注册</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import request from '@/api/axiosInstance'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const uname = ref('')
const passwd = ref('')
const router = useRouter()
const userStore = useUserStore()

const login = async () => {
  let res = await request.post('/user/login', { username: uname.value, password: passwd.value })
  if (res.status === 200) {
    console.log(res.data.data)
    // 登录成功
    userStore.userInfo = res.data.data.info
    userStore.isLogin = true
    localStorage.setItem('token', res.data.data.token)
    router.replace('/')
  }
}

const goRegister = () => {
  router.replace('/register')
}
</script>

<style lang="less" scoped>
.login {
  width: 1020px;
  height: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 20px;
  box-sizing: border-box;
}
.content {
  display: flex;
  justify-content: space-between;
  margin: 60px;
  color: black;
  .lg {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 20px 80px;
    h3 {
      padding: 20px;
    }
    .el-input,
    .inp,
    button {
      margin: 10px 0;
    }
    .el-input {
      height: 40px;
    }
    button {
      width: 100%;
      height: 40px;
      background-color: #3eaf7c;
      border-radius: 100px;
      cursor: pointer;
      color: #fff;
      font-size: 18px;
    }
  }
  .reg {
    // background-color: pink;
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    p {
      padding: 20px;
      font-size: 16px;
    }
    button {
      padding: 10px 50px;
      border-radius: 100px;
      background-color: transparent;
      box-sizing: border-box;
      border: 1px solid #3eaf7c;
      color: #3eaf7c;
    }
    button:hover {
      background-color: #ddd;
    }
  }
}
</style>
