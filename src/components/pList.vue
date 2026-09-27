<template>
  <div class="person">
    <div class="head">
      <el-avatar :size="70" :src="circleUrl" />
      <div class="account">
        <div class="uname">adff</div>
        <div class="coin">
          <span>账号余额：<i>0</i> 金币</span>
          <span>立即充值</span>
        </div>
      </div>
    </div>
    <div class="mybook">
      <div class="h">
        <h4>我的书架</h4>
        <div>全部收藏<i>></i></div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <td>类别</td>
            <td>书名</td>
            <td>最新章节</td>
            <td>更新时间</td>
            <td>书签</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">[历史军事]</a></td>
            <td><a href="#">我娘子天下第一</a></td>
            <td><a href="#">第六百一十七章</a></td>
            <td>08/15 00:26</td>
            <td><a href="#">继续阅读</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.person {
  .head {
    margin-top: 20px;
    display: flex;
    .account {
      margin-left: 25px;
      .uname {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .coin {
        font-size: 14px;
        i {
          color: #3eaf7c;
        }
        span {
          margin-right: 15px;
        }
        span:last-child {
          display: inline-block;
          padding: 5px;
          background-color: #3eaf7c;
          color: #fff;
          cursor: pointer;
          font-size: 10px;
          border-radius: 3px;
        }
      }
    }
  }
  .mybook {
    .h {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      div {
        font-size: 12px;
        i {
          margin-left: 3px;
        }
        cursor: pointer;
      }
      div:hover {
        color: #3eaf7c;
      }
    }
    .table {
      border-top: 1px solid #ddd;
      width: 100%;
      margin: 0;
      padding: 0;
      thead {
        background-color: #f9f9f9;
      }
      td {
        height: 40px;
        font-size: 13px;
        padding-left: 10px;
        a:hover {
          color: #3eaf7c;
        }
      }
    }
  }
}
</style>
