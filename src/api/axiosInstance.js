import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
})
// 自动带上cookie
instance.defaults.withCredentials = true

export default instance
