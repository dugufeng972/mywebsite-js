<template>
  <div class="hotbook">
    <div class="left">17</div>
    <div class="mid">
      <div class="bookname">溯雨信笺电视广告人工岛防波堤给</div>
      <div class="tag">现代言情</div>
    </div>
    <div class="right">
      <img src="@/assets/image/pic/1.webp" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.hotbook {
  width: 190px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  background-color: pink;
  .left {
    color: #333;
  }
  .mid {
    margin: 0 10px;
    .bookname {
      font-size: 14px;
      color: #8f8f8f;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 控制显示的行数 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100px;
    }
    .tag {
      margin-top: 3px;
      font-size: 12px;
      color: #4f4f4f;
    }
  }
  .right {
    border-radius: 5px;
    overflow: hidden;
    img {
      // display: flex;
      display: block;
      width: 45px;
      height: 60px;
    }
  }
}
</style>
