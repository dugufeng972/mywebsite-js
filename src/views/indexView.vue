<template>
  <div class="index">
    <div class="container">
      <div class="head">
        <div class="log">
          <a href="#"><img src="@/assets/image/logobook.png" /></a>
        </div>
        <div class="search">
          <input type="text" />
          <button>搜索</button>
        </div>
        <div class="login">
          <span><router-link to="/personview/pList">我的书架</router-link></span>
          <span></span>
          <span>
            <router-link href="#">登录</router-link>
            <router-link href="#">注册</router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="container">
        <span><router-link to="/indexview/indexcontent">首页</router-link></span>
        <!-- <span><router-link to="/ll">排行</router-link></span>
        <span><router-link to="sd">完本</router-link></span>
        <span><router-link to="we">分类</router-link></span>
        <span><router-link to="op">作家专区</router-link></span> -->
      </div>
    </div>
    <div class="content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.index {
  background-color: #f5f5f5;
}
.container {
  width: 1020px;
  margin: 0 auto;
}
.head {
  display: flex;
  height: 71px;
  padding-top: 10px;
  align-items: center;
  justify-content: space-between;
  .log {
    img {
      width: 192px;
      height: 48px;
    }
  }
  .search {
    input {
      width: 282px;
      height: 37px;
      border-top-left-radius: 19px;
      border-bottom-left-radius: 19px;
      border: 1px solid #3eaf7c;
      border-right: none;
      box-sizing: border-box;
      padding-left: 15px;
    }
    button {
      width: 58px;
      height: 37px;
      border-top-right-radius: 19px;
      border-bottom-right-radius: 19px;
      border: 1px solid #3eaf7c;
      border-left: none;
      background-color: #3eaf7c;
      color: #fff;
      cursor: pointer;
    }
  }
  .login {
    a:hover {
      color: #3eaf7c;
    }
    span:nth-child(2) {
      border: 1px solid black;
      margin: 0 15px;
    }
    span:last-child {
      a:first-child {
        margin-right: 15px;
      }
    }
  }
}
.nav {
  background-color: #3eaf7c;
  height: 48px;
  line-height: 48px;
  span {
    margin-right: 60px;
    a {
      color: #fff;
      padding-bottom: 10px;
      border-bottom: 0px solid #fff;
      transition: all 0.1s ease 0s;
    }
    a:hover {
      border-bottom: 2px solid #fff;
      // transition: all 0.15s ease 0s;
    }
  }
  margin-bottom: 20px;
}
.router-link-active {
  border-bottom: 2px solid #fff !important;
}
</style>
