<template>
  <div class="directory">
    <div class="head">
      <div class="title"><h2>被诈骗不要慌，反手送他沙漠之鹰</h2></div>
      <div class="detail">
        <span>作者：白巨翼</span>
        <span>类别：都市言情</span>
        <span>状态：连载中</span>
        <span>总点击：112</span>
        <span>总字数：2279442</span>
      </div>
    </div>
    <div class="list">
      <div class="listTitle">正文(608)</div>
      <div class="dirList">
        <ul>
          <li><a @click="goRead(234)"> 第1章：失信人员 </a><span>[免费]</span></li>
        </ul>
        <ul>
          <li><a href="#"> 第1章：失信人员 </a><span>[免费]</span></li>
        </ul>
        <ul>
          <li><a href="#"> 第1章：失信人员 </a><span>[免费]</span></li>
        </ul>
        <ul>
          <li>
            <a href="#"> 第1章：失信人员飞机欧文放假哦我房间饿哦必备和笔记本不好v和v和v给v给 </a
            ><span>[免费]</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
// 跳转阅读页面，id为章节id
const goRead = (id) => {
  router.push({ path: '/read', query: { id: id } })
}
</script>

<style lang="less" scoped>
.directory {
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px;
  color: #333333;
  .head {
    text-align: center;
    .title {
      margin-bottom: 20px;
    }
    .detail {
      span {
        padding: 0 20px;
      }
    }
  }
  .list {
    .listTitle {
      background-color: #f9f9f9;
      padding: 10px 0;
      padding-left: 10px;
    }
    .dirList {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      li {
        padding: 10px 0;
        border-bottom: 1px solid #f9f9f9;
        display: flex;
        align-items: center;
        a {
          display: inline-block;
          max-width: 220px;
          color: #333333;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        a:hover {
          color: #3eaf7c;
        }
        span {
          color: #3eaf7c;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
