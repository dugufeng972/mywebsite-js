<template>
  <div class="range">
    <h3 class="title">{{ title }}</h3>
    <div class="weekcont">
      <ul v-if="list.length !== 0">
        <li v-for="(value, index) in list" :key="value.bookId" @click="goDetail(value.bookId)">
          <div class="bookname">
            <span :class="{ rateColor: index >= 2 }">{{ index + 1 }}</span>
            <a @mouseenter="changeDisplay(index)" :class="{ active: now === index }">{{
              value.bookname
            }}</a>
          </div>
          <div class="bookdetail" v-if="now === index">
            <div class="image">
              <img src="@/assets/image/pic/2.webp" />
            </div>
            <div class="txt">
              <p>{{ value.introduction }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import request from '@/api/axiosInstance'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const list = ref([])
const now = ref(0)
const props = defineProps({
  url: String,
  title: String,
})

request.get(props.url).then((res) => {
  list.value = res.data.data
})

const goDetail = (bookId) => {
  router.push({ path: `/bookcontent`, query: { id: bookId } })
}

const changeDisplay = (index) => {
  now.value = index
}
</script>

<style lang="less" scoped>
.range {
  min-width: 200px;
  height: 100%;
  .title {
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
  .weekcont {
    border-top: 1px solid #ddd;
    li {
      margin: 12px 0;
      transition: all 0.5s ease-in 0s;
      cursor: pointer;
      .bookname {
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          width: 17px;
          height: 17px;
          line-height: 17px;
          text-align: center;
          color: #fff;
          background-color: #3eaf7c;
          margin-right: 5px;
        }
        a {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #333;
          transition: all 0.2s ease 0s;
        }
      }
      .bookdetail {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #f7f7f7;
        width: 240px;
        height: 80px;
        overflow: hidden;
        margin-top: 12px;
        .image {
          flex-shrink: 0;
          width: 60px;
          height: 80px;
          overflow: hidden;
          margin-right: 10px;
        }
        img {
          display: block;
          width: 60px;
          height: 80px;
          transition: all 0.5s ease 0s;
        }
        img:hover {
          transform: scale(1.1, 1.1);
        }
        .txt {
          height: 80px;
          display: grid;
          grid-template-columns: auto;
          overflow: hidden;
          p {
            text-indent: 1em;
            line-height: 20px;
            margin-bottom: 5px;
            font-size: 13px;
            color: #636161;
            transition: color 0.2s ease-in 0s;
          }
          p:hover {
            color: #3eaf7c;
          }
        }
      }
    }
  }
}
.active {
  color: #3eaf7c !important;
}
.rateColor {
  background-color: #999999 !important;
}
</style>
