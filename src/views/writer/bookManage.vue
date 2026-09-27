<template>
  <div class="bookManage">
    <div class="head">
      <div class="left">我的小说</div>
      <div class="right">
        <span @click="goUpBook">上传新书</span>
        <i />
        <span>创建新书</span>
      </div>
    </div>
    <div class="books">
      <div class="book">
        <div class="item">
          <div class="info">
            <div class="cover">
              <img src="@/assets/image/pic/2.webp" alt="" />
            </div>
            <div class="mid">
              <div>
                <div class="bookname">难言</div>
                <div class="desc">最新更新：暂未发布章节</div>
              </div>
              <div class="detail">
                <span>0 章</span>
                <i></i>
                <span>0 字</span>
                <i></i>
                <span>待审核</span>
              </div>
            </div>
          </div>
          <div class="control">
            <button>作品相关</button>
            <button>章节管理</button>
            <button>创建章节</button>
          </div>
        </div>
        <div class="step"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goUpBook = () => {
  router.push({ path: '/writer/upbook' })
}
</script>

<style lang="less" scoped>
.bookManage {
  .head {
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 20px;
      font-weight: 350;
    }
    .right {
      span {
        font-size: 14px;
        color: #333;
        cursor: pointer;
      }
      span:hover {
        color: #3eaf7c;
      }
      i {
        display: inline-block;
        width: 1px;
        height: 10px;
        margin: 0 10px;
        background-color: #333;
      }
    }
  }
  .books {
    padding: 20px;
    .item {
      display: flex;
      justify-content: space-between;
      .info {
        display: flex;
        .cover img {
          width: 90px;
          height: 120px;
        }
        .mid {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .bookname {
            font-size: 18px;
          }
          .desc {
            font-size: 16px;
            color: #333;
            margin-top: 10px;
          }
          .detail {
            font-size: 16px;
            color: #515151;
            display: flex;
            align-items: center;
            i {
              display: inline-block;
              width: 1px;
              height: 10px;
              background-color: #515151;
              margin: 0 5px;
            }
          }
        }
      }
      .control {
        display: flex;
        align-items: end;
        button {
          margin-right: 10px;
          padding: 8px 15px;
          cursor: pointer;
          border-radius: 20px;
        }
        button:hover {
          background-color: #adacac;
        }
      }
    }
  }
}
</style>
