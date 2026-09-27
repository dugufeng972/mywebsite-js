<template>
  <div class="list">
    <div class="head">
      <div class="channel">
        <span>作品频道：</span>
        <span class="active">男频</span>
        <span>女频</span>
      </div>
      <div class="category">
        <span>作品分类：</span><span>不限</span><span>玄幻奇幻</span><span>武侠仙侠</span
        ><span>都市言情</span><span>历史军事</span>
      </div>
      <div class="status">
        <span>是否完结：</span>
        <span>不限</span>
        <span>连载中</span>
        <span>已完结</span>
        <span>太监</span>
      </div>
      <div class="sort">
        <span>排序方式：</span>
        <span>不限</span>
        <span>更新时间</span>
        <span>总字数</span>
      </div>
    </div>
    <div class="body">
      <ul class="title">
        <li>序号</li>
        <li>类别</li>
        <li>书名</li>
        <li>最新章节</li>
        <li>作者</li>
        <li>字数</li>
      </ul>
      <ul class="content" v-for="value in 20" :key="value">
        <li><span>1</span></li>
        <li class="cate"><a href="#">[都市言情]</a></li>
        <li class="bookname"><a href="#">欲壑难填</a></li>
        <li class="lastchapter"><a href="#">第199章 放过</a></li>
        <li>山与汐</li>
        <li>23.34万</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.list {
  .head {
    padding: 20px;
    background-color: #fff;
    margin-bottom: 20px;
    div {
      padding: 10px 0;
      font-size: 14px;
      span:first-child {
        color: #999;
        margin-right: 30px;
      }
      span:nth-child(n + 2) {
        margin-right: 30px;
        cursor: pointer;
        color: #333333;
        transition: color 0.2s ease-out 0s;
      }
      span:nth-child(n + 2):hover {
        color: #3eaf7c;
      }
    }
  }
  .body {
    padding: 20px;
    background-color: #fff;
    ul {
      display: grid;
      grid-template-columns: 46px 75px 300px 405px 83px 1fr;
    }
    ul:nth-child(2n + 1) {
      background-color: #f9f9f9;
    }
    .title {
      padding: 15px 0;
      padding-left: 5px;
      font-size: 14px;
      color: #888;
    }
    .content {
      padding: 15px 0;
      padding-left: 5px;
      font-size: 14px;
      color: #888;
      li:first-child {
        padding-left: 3px;
      }
      .bookname a {
        color: #333333;
        transition: color 0.1s ease-in 0s;
      }
      .cate a {
        transition: color 0.1s ease-in 0s;
      }
      .cate,
      .bookname {
        a:hover {
          color: #3eaf7c;
        }
      }
      .lastchapter {
        a {
          font-size: 12px;
        }
      }
      li:nth-child(n + 5) {
        font-size: 12px;
      }
      span {
        display: inline-block;
        padding: 1px 5px;
        background-color: #999999;
        color: #fff;
        font-size: 12px;
      }
      a {
        font-size: 14px;
        color: #888;
      }
    }
  }
}
.active {
  color: #3eaf7c !important;
}
</style>
