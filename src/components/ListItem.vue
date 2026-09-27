<template>
  <div class="item">
    <RouterLink :to="la">{{ ln }}</RouterLink>
  </div>
</template>

<script setup>
const props = defineProps({
  ln: String,
  la: String,
})
</script>

<style lang="less" scoped>
.item {
  width: 198px;
  height: 42px;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 5px;
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-left: 2px solid transparent;
    padding-left: 20px;
    box-sizing: border-box;
  }
  a:hover {
    // border-left: 2px solid #3eaf7c;
    background-color: #f5f5f5;
  }
}
.router-link-active {
  border-left: 2px solid #3eaf7c !important;
  background-color: #f5f5f5;
}
</style>
