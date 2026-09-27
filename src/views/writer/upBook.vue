<template>
  <div class="upbook">
    <div class="head">创建作品</div>
    <form class="main" ref="myForm">
      <div class="cover">
        <img :src="imgPath" />
        <label for="cover"
          >选择封面
          <input
            type="file"
            name="cover"
            id="cover"
            @change="selectImg"
            accept=".png, .jpg, .jpeg, .webp"
          />
        </label>
      </div>
      <ul class="bookInfo">
        <li>
          <span>书本名称</span>
          <span><input type="text" placeholder="请输入作品名称" name="bookname" /></span>
        </li>
        <li>
          <span>目标读者</span>
          <span>
            <label for="男频"
              ><input type="checkbox" name="gender" id="男频" value="male" />男频</label
            >
            <label for="女频"
              ><input type="checkbox" name="gender" id="女频" value="female" />女频</label
            >
          </span>
        </li>
        <li>
          <span>作品标签</span>
          <span><div class="tags" @click="AddTag">请选择作品标签</div></span>
        </li>
        <li>
          <span>作品简介</span>
          <span>
            <textarea
              class="introduction"
              placeholder="请输入50-500字以内的作品简介"
              name="intro"
            />
            <span>0 / 500</span>
          </span>
        </li>
        <li class="upLi">
          <span>作品上传</span>
          <span>
            <label for="book_txt">
              选择文件
              <input type="file" name="booktxt" id="book_txt" @change="displayFileName" />
              <i v-if="fileName">{{ fileName }}</i>
            </label>
          </span>
        </li>
        <li>
          <button class="submit" type="button" @click="upload">提交</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script setup>
import imgSrc from '@/assets/image/pic/1.webp'
import { onMounted, ref, useTemplateRef } from 'vue'
import request from '@/api/axiosInstance'

const myForm = ref(null)

const imgPath = ref(imgSrc)
const fileName = ref('')
const tags = ref([])

const selectImg = (e) => {
  const file = e.target.files[0]
  if (file) {
    imgPath.value = URL.createObjectURL(file)
  }
}

const AddTag = () => {}

const displayFileName = (e) => {
  fileName.value = e.target.files[0].name
}

const upload = async () => {
  const formData = new FormData(myForm.value)
  console.log(formData.get('booktxt'))
  let res = await request.post('/book/upbook', formData)
  console.log(res.data)
}
</script>

<style lang="less" scoped>
.upbook {
  .head {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .main {
    display: flex;
    .cover {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 40px;
      img {
        width: 150px;
        margin-bottom: 20px;
      }
      label {
        position: relative;
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        background-color: skyblue;
        input {
          position: absolute;
          width: 0px;
          opacity: 0;
        }
      }
    }
    .bookInfo {
      flex: 1;
      li {
        display: flex;
        width: 100%;
        margin-bottom: 20px;
        span:first-child {
          margin-right: 40px;
        }
        label {
          margin-right: 10px;
          font-size: 15px;
        }
        span:last-child {
          flex-grow: 1;
        }
        input[type='text'] {
          box-sizing: border-box;
          width: 100%;
          padding: 5px 10px;
          font-size: 14px;
          margin: 0;
        }
        .tags {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          border: 1px solid red;
          height: 32px;
          padding: 0 10px;
          font-size: 14px;
          cursor: pointer;
          background-color: skyblue;
        }
        .introduction {
          all: unset;
          box-sizing: border-box;
          width: 100%;
          height: 200px;
          padding: 5px 10px;
          font-size: 14px;
          background-color: skyblue;
        }
      }
      li:last-child {
        justify-content: flex-end;
        .submit {
          margin-right: 20px;
          padding: 10px 30px;
          background-color: skyblue;
        }
      }
      .upLi {
        label {
          display: inline-block;
          box-sizing: border-box;
          width: 100%;
          padding: 5px 10px;
          cursor: pointer;
          background-color: skyblue;
          input {
            width: 0;
            opacity: 0;
          }
          i {
            margin-left: 10px;
            padding: 2px 3px;
            border: 1px solid red;
          }
        }
      }
    }
  }
}
</style>
