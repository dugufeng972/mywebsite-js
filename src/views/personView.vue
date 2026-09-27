<template>
  <div class="personal">
    <div class="container">
      <div class="list">
        <ListItem
          v-for="(value, index) in list"
          :key="index"
          :ln="value.ln"
          ,
          :la="value.la"
        ></ListItem>
      </div>
      <div class="display">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import ListItem from '@/components/ListItem.vue'
import { ref } from 'vue'
// import pList from '@/components/pList.vue'

import { RouterLink } from 'vue-router'
const list = ref([
  { ln: '个人中心', la: '/personview/pList' },
  { ln: '我的书架', la: '/personview/pb' },
  { ln: '我的书评', la: '/personview/pp' },
  { ln: '反馈', la: '/personview/pf' },
  { ln: '账号设置', la: '/personview/pz' },
])
const isActive = ref(-1)

const change = function (index) {
  isActive.value = index
}
</script>

<style lang="less" scoped>
.personal {
  background-color: #f5f5f5;
  .container {
    display: flex;
    width: 1020px;
    height: 500px;
    margin: 0 auto;
    background-color: #fff;
    .list {
      padding: 20px;
    }
  }
  .display {
    width: 100%;
    height: 100%;
    border-left: 1px solid #ddd;
    padding-left: 20px;
    padding-right: 20px;
  }
}
// .listactive {
//   border-left: 2px solid #3eaf7c !important;
//   background-color: #f5f5f5 !important;
// }
</style>
