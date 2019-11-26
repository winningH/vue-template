import axios from 'axios'
import { Message } from 'iview'

const instance = axios.create({
  baseURL: '',
  method: 'get',
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  console.log(error)
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  return response.data
}, error => {
  // 对响应错误做点什么
  if (/404$/.test(error)) {
    Message.error('接口地址错误')
  } else if (/timeout/.test(error)) {
    Message.warning('请求超时，请稍后再试！')
  } else {
    Message.error({
      content: error || 'error',
      duration: 3
    })
  }
  return Promise.reject(error)
})

export default instance
