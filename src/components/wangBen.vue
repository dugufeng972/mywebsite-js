<template>
  <div class="list" v-if="completedBookList.length !== 0">
    <displayBook v-for="value in completedBookList" :key="value.bookId" :book="value"></displayBook>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import displayBook from './displayBook.vue'
import request from '@/api/axiosInstance'

const completedBookList = ref([])
request.get('/book/completed').then((res) => {
  console.log(res.data.data)
  completedBookList.value = res.data.data
})
</script>

<style lang="less" scoped>
.list {
  background-color: #fff;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>
