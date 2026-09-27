import bookD from '@/components/bookD.vue';
<template>
  <div class="book">
    <div><img src="@/assets/image/pic/5.webp" /></div>
    <div class="bd">
      <h4 class="title">重生了，回到小县城当豪门</h4>
      <div class="auh">作者：<span>抽烟的小丑鱼</span></div>
      <div class="detail">
        大学毕业后，罗阳留在了魔都工作。坚持了十几年的996节奏，用大肚腩和掉头发的代价换来了月薪两三万的工作岗位。
        大学毕业后，罗阳留在了魔都工作。
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.book {
  display: flex;
  img {
    width: 96px;
    height: 120px;
  }
  .bd {
    width: 230px;
    height: 120px;
    margin-left: 15px;
    overflow: hidden;
    h4 {
      margin: 0;
      padding: 0;
    }
    .auh {
      font-size: 12px;
      margin: 13px 0;
    }
    .detail {
      font-size: 13px;
    }
  }
}
</style>
