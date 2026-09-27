<template>
  <div class="booklist">
    <div class="title">
      <h4>最近更新</h4>
    </div>
    <div class="list">
      <div class="lt">
        <div>类别</div>
        <div>书名</div>
        <div>最新章节</div>
        <div>作者</div>
        <div>更新时间</div>
      </div>
      <div class="lt cont" v-for="value in 10" :key="value">
        <div>[都是言情]</div>
        <div @click="goDetail('/bookcontent', 299)">重生八零：赶海觉醒情报系统，鱼获爆棚！</div>
        <div>第326章 白家的善意，送信</div>
        <div>出土的暴龙</div>
        <div>08/07 14:47</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const routerView = (pathStr, queryParam) => {
  router.push({ path: pathStr, query: queryParam })
}
const goDetail = (path, id) => {
  routerView('/bookcontent', { id: id })
}
</script>

<style lang="less" scoped>
.booklist {
  .title {
    h4 {
      color: #333;
      font:
        12px/1.5 PingFangSC-Regular,
        HelveticaNeue-Light,
        'Helvetica Neue Light',
        'Microsoft YaHei',
        sans-serif,
        '宋体';
      line-height: 1;
      // padding-bottom: 14px;
      display: inline-block;
      font-size: 20px;
      font-weight: 600;
      margin: 0;
      margin-bottom: 14px;
    }
  }
  .list {
    // display: flex;
    // justify-content: space-between;
    // justify-content:;
    // & > div {
    //   border-top: 1px solid black;
    // }
    font-size: 14px;
    .lt {
      display: grid;
      grid-template-columns: 1fr 2.3fr 2.8fr 1.3fr 1.3fr;
      grid-gap: 0 10px;
      padding: 15px 0;
      border-top: 1px solid #ddd;
      color: #8e8d8d;
    }
    .cont {
      div:nth-child(1) {
        cursor: pointer;
        transition: all 0.2s ease 0s;
        &:hover {
          color: #3eaf7c;
        }
      }
      div:nth-child(2),
      div:nth-child(3) {
        color: #333;
        white-space: nowrap; /* 确保文本在一行内显示 */
        overflow: hidden; /* 隐藏超出容器宽度的文本 */
        text-overflow: ellipsis; /* 使用省略号表示文本已被截断 */
        cursor: pointer;
        transition: all 0.2s ease 0s;
        &:hover {
          color: #3eaf7c;
        }
      }
      div:nth-child(3) {
        font-size: 12px;
        transition: all 0.2s ease 0s;
        cursor: pointer;
        &:hover {
          color: #3eaf7c;
        }
      }
      div:nth-child(4),
      div:nth-child(5) {
        font-size: 12px;
      }
    }
  }
}
</style>
