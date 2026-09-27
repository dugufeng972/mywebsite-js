<template>
  <div class="content">
    <div class="detail" v-if="bookDetail">
      <div class="cover">
        <img src="@/assets/image/pic/6.webp" alt="" />
      </div>
      <div class="descp">
        <div class="title">
          <h2>{{ bookDetail.bookname }}</h2>
          <div>
            <span>{{ bookDetail.author }}</span> 著
          </div>
        </div>
        <div class="sta">
          <span
            >类别：<i>{{ bookDetail.category }}</i></span
          >
          <span
            >状态：<i>{{ bookDetail.status }}</i></span
          >
          <span>总点击：<i>128</i></span>
          <span>总字数：<i>1554400</i></span>
        </div>
        <div class="intr">
          <p>{{ bookDetail.introduction }}</p>
        </div>
        <div class="btn">
          <button @click="goRead(299)">点击阅读</button>
          <button @click="goCol(299)">加入书架</button>
        </div>
      </div>
    </div>
    <div class="btm">
      <div class="newChapter">
        <div class="chTitle">
          <h3>
            最新章节<i>({{ match[1] }}章)</i>
          </h3>
          <span><a @click="goDirList(123)">全部目录</a></span>
        </div>
        <div class="newCh">
          <div class="ntitl">
            <span
              ><a href="#">{{ bookDetail.latestChapter }}</a></span
            >
            <span>更新时间：{{ bookDetail.updateTime }}</span>
          </div>
          <div class="ncon">正处于野外进行特训的丹帝，此刻已经完...</div>
        </div>
        <div class="cris">
          <div class="cTitle">
            <h3>作品评论区<i>(3条)</i></h3>
            <span><a href="#">发表评论</a></span>
          </div>
          <div class="cC" v-for="value in 3" :key="value">
            <div class="avter">
              <el-avatar :size="50" :src="getImageUrl('../assets/image/avatar.jpg')" />
            </div>
            <div class="ct">
              <div class="un">用户名</div>
              <div class="ut">好好干呀呀</div>
              <div class="time">
                <div>1个月前</div>
                <div>
                  <!-- <a href="#">回复<i>(0)</i> </a> -->
                  <a href="#">赞<i>(0)</i> </a>
                  <a href="#">踩<i>(0)</i> </a>
                </div>
              </div>
            </div>
          </div>
          <div class="more">
            <button>查看全部评论></button>
          </div>
        </div>
        <div class="send">
          <h4>发表评论</h4>
          <textarea name="" id="" placeholder="我来说两句..."></textarea>
          <div>
            <span>0/1000</span>
            <button>发送</button>
          </div>
        </div>
      </div>
      <div class="auth">
        <div class="avatar">
          <el-avatar :size="80" :src="getImageUrl('../assets/image/avatar.jpg')" />
          <div class="tag">签约作家</div>
          <h4>千翅万瞳</h4>
        </div>
        <div class="speak">
          <p>作者有话说</p>
          <p>亲亲们，你们的支持是我最大的动力！</p>
          <p>求点击、求推荐、求书评哦！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import request from '@/api/axiosInstance'
import { onMounted, ref } from 'vue'
//从顶部开始显示
// onMounted(() => {
//   window.scrollTo(0, 0)
// })

const route = useRoute()
const router = useRouter()
const bookDetail = ref({})
const match = ref(0)
request.get('/book/' + route.query.id).then((res) => {
  console.log(res.data.data)
  bookDetail.value = res.data.data
  match.value = bookDetail.value.latestChapter.match(/第(\d+)章/)
})
// 路由跳转函数
// const goDir = (path, query) => {
//   router.push({ path: path, query: query })
// }
// 跳转目录页，id是bookid
const goDirList = (path, id) => {
  // goDir({ path: path, query: { id: id } })
  router.push({ path: '/directory', query: { id: id } })
}
// 返回默认头像静态资源地址
const getImageUrl = (name) => {
  return new URL(name, import.meta.url).href
}
// 跳转阅读页面
const goRead = (id) => {
  router.push({ path: '/read', query: { id: id } })
}
// 添加收藏
const goCol = () => {}
</script>

<style lang="less" scoped>
.content {
  // background-color: pink;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  .detail {
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .cover img {
      width: 200px;
      height: 266px;
      cursor: pointer;
      transition: all 0.5s ease 0s;
    }
    .cover img:hover {
      transform: scale(1.06, 1.06);
    }
    .descp {
      margin-left: 20px;
      & > div {
        margin-bottom: 15px;
      }
      .title {
        display: flex;
        align-items: baseline;
        div {
          margin-left: 20px;
          font-size: 16px;
        }
      }
      .sta {
        span {
          font-size: 14px;
          color: #666666;
          margin-right: 50px;
        }
      }
      .intr {
        p {
          margin-top: 20px;
        }
      }
      .btn {
        margin-top: 40px;
        button {
          padding: 10px 20px;
          border-radius: 100px;
          background-color: #3eaf7c;
          cursor: pointer;
          color: #fff;
          margin-right: 40px;
        }
        button:last-child {
          box-sizing: border-box;
          background-color: transparent;
          border: 1px solid #3eaf7c;
          color: #3eaf7c;
          &:hover {
            background-color: #ddd;
          }
        }
      }
    }
  }
  .btm {
    display: flex;
    .newChapter {
      flex: 1;
      background-color: white;
      padding: 20px;
      .chTitle {
        display: flex;
        justify-content: space-between;
        padding-bottom: 14px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 14px;
        h3 {
          font-weight: bold;
          font-size: 18px;
          i {
            font-weight: normal;
            font-size: 15px;
            color: #666666;
          }
        }
        span {
          a {
            font-size: 15px;
          }
          a:hover {
            color: #3eaf7c;
          }
        }
      }
      .newCh {
        margin-bottom: 40px;
        .ntitl {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          span:first-child {
            font-weight: bold;
            font-size: 16px;
          }
          span:last-child {
            font-size: 12px;
            color: #666666;
          }
        }
        .ncon {
          text-indent: 1.5em;
          font-size: 14px;
          color: #666666;
        }
      }
      .cris {
        .cTitle {
          display: flex;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid #ddd;
          margin-bottom: 20px;
          i {
            font-weight: normal;
            font-size: 15px;
            color: #666666;
          }
          span {
            a {
              font-size: 15px;
            }
            a:hover {
              color: #3eaf7c;
            }
          }
        }
        .cC {
          display: flex;
          margin-bottom: 20px;
          .avter {
            margin-right: 20px;
          }
          .ct {
            width: 100%;
            .ut {
              margin: 20px 0;
              font-size: 14px;
              font-weight: 500;
            }
            .time {
              display: flex;
              justify-content: space-between;
              // background-color: pink;
              font-size: 14px;
              color: #666666;
              div:last-child {
                a {
                  color: #666666;
                  margin-left: 10px;
                  i {
                    color: rgb(207, 44, 44);
                  }
                }
              }
            }
          }
        }
        .more {
          margin-bottom: 20px;
          button {
            display: block;
            width: 100%;
            height: 30px;
            font-size: 13px;
            color: #fff;
            background-color: #3eaf7c;
            cursor: pointer;
          }
        }
      }
      .send {
        textarea {
          box-sizing: border-box;
          width: 100%;
          height: 80px;
          margin: 20px 0;
          resize: none;
          padding: 5px;
          // border-color: #ddd;
          border: 1px solid #ddd;
          border-radius: 3px;
        }
        div {
          display: flex;
          justify-content: space-between;
          span {
            font-size: 14px;
            color: #666666;
          }
          button {
            width: 100px;
            height: 40px;
            border-radius: 20px;
            background-color: #3eaf7c;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
    .auth {
      width: 250px;
      height: 242px;
      margin-left: 20px;
      background-color: #fff;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .avatar {
        position: relative;
        margin-bottom: 20px;
        // border-bottom: 1px solid;
        // background-color: pink;
        div {
          position: absolute;
          bottom: 23px;
          left: 12px;
          // display: inline-block;
          background-color: #3eaf7c;
          color: #fff;
          font-size: 12px;
          padding: 4px;
          border-radius: 4px;
        }
        h4 {
          font-size: 16px;
          text-align: center;
          margin-top: 10px;
        }
      }
      .speak {
        // background-color: pink;
        border-top: 1px solid #dddddd;
        padding-top: 10px;
        font-size: 14px;
        p {
          padding-bottom: 10px;
        }
      }
    }
  }
}
</style>
