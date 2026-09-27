<template>
  <div class="register">
    <div class="reg">
      <h3>注册小说精品屋账号</h3>
      <el-input v-model="uname" placeholder="用户名" :prefix-icon="User" />
      <el-input v-model="passwd" placeholder="密码" :prefix-icon="Lock" />
      <div>
        <el-input v-model="vcode" :placeholder="vplaceholder" :prefix-icon="Message" class="msg" />
        <button class="gmsg" @click="getMsg" :disabled="isDisabled">{{ btnTxt }}</button>
      </div>
      <div class="errMsg" v-if="isShowErr">注册失败!! {{ errMsg }}</div>
      <button class="reb" @click="submit" :disabled="disSubmit">注册</button>
    </div>
    <div class="have">
      <div>已有账号</div>
      <div><button @click="goLogin">立即登录</button></div>
    </div>
  </div>
</template>

<script setup>
import { User, Lock, Message } from '@element-plus/icons-vue'
import { ref } from 'vue'
import request from '@/api/axiosInstance'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const count = ref(60)
const btnTxt = ref('获取验证码')
const isDisabled = ref(false)
const uname = ref('')
const passwd = ref('')
const vcode = ref('')
const vplaceholder = ref('验证码')
const token = ref('')
const disSubmit = ref(false)
const router = useRouter()
// 是否显示错误信息
const isShowErr = ref(false)
// 错误信息
const errMsg = ref('')

// 获取验证码
const getMsg = () => {
  btnTxt.value = '60秒后重发'
  isDisabled.value = true
  request.get('/user/authcode').then((res) => (vplaceholder.value += res.data.data))
  let i = setInterval(() => {
    count.value = count.value - 1
    btnTxt.value = count.value + '秒后重发'
    if (count.value === 0) {
      clearInterval(i)
      btnTxt.value = '获取验证码'
      isDisabled.value = false
      count.value = 60
      vplaceholder.value = '验证码'
    }
  }, 1000)
}
// 提交表单事件
const submit = async () => {
  // 禁止再次点击
  disSubmit.value = true
  // 10s后恢复提交能力
  setTimeout(() => {
    disSubmit.value = false
    // 如果有失败信息，清除失败信息
    isShowErr.value = false
  }, 10000)

  isShowErr.value = !isShowErr.value
  console.log(isShowErr.value)
  // 后面补上为空时提示
  if (uname.value === '') {
    return
  }
  if (passwd.value === '') {
    return
  }
  if (vcode.value === '') {
    return
  }
  let res = await request.post('/user/register', {
    username: uname.value,
    password: passwd.value,
    code: vcode.value,
  })
  console.log(res)
  if (res.status > 300) {
    // 注册失败,显示失败信息
    isShowErr.value = true
  } else {
    // 注册成功，设置登录状态
    userStore.isLogin = true
    console.log('注册返回数据' + res.data.data)
    localStorage.setItem('token', res.data.data.token)
    userStore.userInfo = res.data.data.info
    // 返回首页
    router.replace('/')
  }
  console.log(res.data)
}

const goLogin = () => {
  router.replace('/login')
}
</script>

<style lang="less" scoped>
.register {
  width: 1020px;
  height: 500px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  .reg {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 120px;
    h3 {
      margin-bottom: 20px;
    }
    .el-input {
      width: 300px;
      margin: 10px 0;
    }
    .msg {
      width: 200px;
    }
    .gmsg {
      box-sizing: border-box;
      width: 80px;
      padding: 5px 0;
      margin-left: 20px;
      background-color: #fff;
      cursor: pointer;
    }
    .gmsg:hover {
      color: #3eaf7c;
    }
    .reb {
      margin-top: 20px;
      width: 300px;
      padding: 10px 0;
      background-color: #3eaf7c;
      cursor: pointer;
      border-radius: 100px;
      color: #fff;
    }
    .errMsg {
      margin-top: 20px;
      color: red;
    }
  }
  .have {
    text-align: center;
    margin-left: 50px;
    margin: 150px;
    button {
      padding: 10px 40px;
      margin-top: 10px;
      background-color: #fff;
      border: 1px solid #3eaf7c;
      color: #3eaf7c;
      border-radius: 100px;
      cursor: pointer;
    }
  }
}
</style>
