<template>
  <div class="book">
    <div class="image" @click="goDetail(299)">
      <img src="@/assets/image/pic/3.webp" />
    </div>
    <div class="bookRight">
      <div class="title">
        <h3 @click="goDetail(299)">{{ book.bookname }}</h3>
      </div>
      <div class="detail">
        <span>{{ book.author }}</span>
        <span class="category">{{ book.category }}</span>
        <span>{{ book.status }}</span>
      </div>
      <div class="introduction">
        <p>
          {{ book.introduction }}
          <!-- 蒸汽与机械的浪潮中，谁能触及非凡？历史和黑暗的迷雾里，又是谁在耳语？我从诡秘中醒来，睁眼看见这个。测试测试测试测试测试测试测试测试测试测试测试 -->
        </p>
      </div>
      <div class="wordCount">{{ 483.63 }}万字</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goDetail = (id) => {
  router.push({ path: '/bookcontent', query: { id: id } })
}

const props = defineProps({
  book: Object,
})
</script>

<style lang="less" scoped>
.book {
  display: flex;
  // justify-content: space-between;
  .image {
    flex-shrink: 0;
    width: 102px;
    height: 136px;
    overflow: hidden;
    margin-right: 20px;
    img {
      display: block;
      width: 102px;
      height: 136px;
      transition: all 0.5s ease 0s;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.06, 1.06);
    }
  }
  .bookRight {
    display: grid;
    // grid-template-columns: 1fr;
    // grid-template-rows: repeat(4, 1fr);
    h3 {
      display: inline;
      font-weight: 500;
      transition: all 0.2s ease 0s;
      cursor: pointer;
    }
    h3:hover {
      color: #3eaf7c;
    }
    .detail {
      span {
        font-size: 12px;
        color: #a6a6a6;
        margin-right: 10px;
      }
      span:nth-child(2) {
        cursor: pointer;
        &:hover {
          color: #3eaf7c;
        }
      }
    }
    .introduction {
      display: -webkit-box; /* 必须，启用flexbox老版本语法 */
      -webkit-box-orient: vertical; /* 垂直排列 */
      -webkit-line-clamp: 2; /* 限制显示的行数 */
      overflow: hidden; /* 隐藏多余文字 */
      text-overflow: ellipsis;
      height: 3em;
      line-height: 1.5em;
      font-size: 14px;
      color: #636161;
      overflow: hidden;
    }
    .wordCount {
      font-size: 12px;
      color: #a6a6a6;
    }
  }
}
</style>
