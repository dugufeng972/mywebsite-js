<template>
  <div class="writer">
    <div class="list">
      <ListItem ln="作品管理" la="/writer/book-manager"></ListItem>
      <ListItem ln="作品数据" la="/writer/book-data"></ListItem>
      <ListItem ln="评论管理" la="/writer/comment-manager"></ListItem>
      <ListItem ln="粉丝管理" la="/writer/fans-manager"></ListItem>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import ListItem from '@/components/ListItem.vue'
</script>

<style lang="less" scoped>
.writer {
  background-color: pink;
  padding: 20px;
  display: flex;
  .list {
    margin-right: 20px;
  }
  .content {
    flex: 1;
  }
}
</style>
