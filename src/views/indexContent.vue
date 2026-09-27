<template>
  <div class="content">
    <div class="contenthead contentpa">
      <!-- 轮播图 -->
      <div class="swiper">
        <div class="sleft">
          <img :src="getImageUrl(picUrl[nowIndex])" />
        </div>
        <div class="sright">
          <div
            v-for="(value, index) in picUrl"
            :key="value"
            @mouseenter="swiper(index)"
            @mouseleave="autoSwiper"
            :class="{ active: nowIndex === index }"
          >
            <img :src="getImageUrl(value)" />
          </div>
        </div>
      </div>
      <!-- 巅峰榜 -->
      <div class="mid">
        <GoodBookCard class="card" v-for="value in 8" :key="value"></GoodBookCard>
      </div>
      <rangeCom :url="'/book/rec/list'" :title="'最新资讯'"></rangeCom>
    </div>
    <div class="contenthot">
      <div class="hotpa">
        <div class="hotrec">
          <h3>热门推荐</h3>
          <div class="hotbook" v-if="hotBookList.length !== 0">
            <!-- <div > -->
            <displayBook v-for="item in hotBookList" :key="item.bookId" :book="item"></displayBook>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="newbook">
      <bookList></bookList>
      <rangeCom :url="'/book/rec/list'" :title="'精品推荐'"></rangeCom>
    </div>
  </div>
</template>

<script setup>
import displayBook from '@/components/displayBook.vue'
import rangeCom from '@/components/rangeCom.vue'
import bookList from '@/components/bookList.vue'
import { useRouter } from 'vue-router'
import request from '@/api/axiosInstance'
import { ref } from 'vue'
import GoodBookCard from '@/components/goodBookCard.vue'

//轮播图片地址
const picUrl = ref([
  '../assets/image/pic/1.webp',
  '../assets/image/pic/4.webp',
  '../assets/image/pic/5.webp',
  '../assets/image/pic/6.webp',
])
const getImageUrl = (name) => {
  return new URL(name, import.meta.url).href
}
// 轮播图索引
const nowIndex = ref(0)
// 轮播图定时器
const i = ref(0)
const weekRec1 = ref([])
const weekRec2 = ref([])
//热门推荐的书
const hotBookList = ref([])
request
  .get('/book/rec', { params: { number: 20 } })
  .then((res) => {
    if (res.data.code === 1) {
      weekRec1.value = res.data.data.slice(0, 5)
      weekRec2.value = [res.data.data.slice(5, 10), res.data.data.slice(10, 15)]
      console.log(res.data.data)
    }
  })
  .catch((err) => console.log(err))
// 请求热门推荐的书
request.get('/book/hotbook').then((res) => {
  console.log(res.data.data)
  hotBookList.value = res.data.data
})
// const router = useRouter()
// const goDetial = (id) => {
//   router.push({ path: `/bookcontent`, query: { id: id } })
// }
// 首页轮播图实现
// 自动轮播
const autoChangePic = (nowIndex) => {
  // let count = 0
  let i = setInterval(() => {
    // count += 1
    nowIndex.value = (nowIndex.value + 1) % picUrl.value.length
    // console.log(count, nowIndex.value)
  }, 5000)
  return i
}
i.value = autoChangePic(nowIndex)
const swiper = (index) => {
  nowIndex.value = index
  clearInterval(i.value)
}
const autoSwiper = () => {
  i.value = autoChangePic(nowIndex)
}
</script>

<style lang="less" scoped>
.content {
  .contenthead {
    box-sizing: border-box;
    display: flex;
    // justify-content: space-between;
    // width: 1020px;
    height: 340px;
    padding: 20px;
    background-color: #fff;
    .swiper {
      display: flex;
      height: 300px;
      .sleft {
        img {
          width: 240px;
          height: 300px;
        }
      }
      .sright {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 14px;
        div {
          border: 2px solid transparent;
          transition: all 0.3s ease 0s;
          &:hover {
            border: 2px solid #3eaf7c;
          }
        }
        img {
          display: block;
          width: 48px;
          height: 65px;
        }
      }
    }
    .mid {
      margin: 0 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      align-content: space-between;
    }

    .rangeCom {
      display: inline-block;
    }
  }
  .contenthot {
    width: 100%;
    margin-top: 20px;
    background-color: #fff;
    .hotpa {
      padding: 20px;
      display: grid;
      // grid-template-columns: 3fr 1fr;
      .hotrec {
        // width: 720px;
        margin-right: 20px;
        h3 {
          padding-bottom: 13px;
          border-bottom: 1px solid #ddd;
          margin-bottom: 20px;
        }
        .hotbook {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 20px;
        }
      }
      // .clicklist {
      //   // width: 240px;
      // }
    }
  }
  .newbook {
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 0px 20px;
    // .rangeCom {
    //   margin-left: 20px;
    // }
  }
}
// 设置轮播图激活边框
.active {
  border: 2px solid #3eaf7c !important;
}
</style>
