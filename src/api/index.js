/**
 * 接口请求处理 demo
 * @param method  get | post | put | patch | delete， 默认get，可以不写
 * @param url     baseUrl + '接口路径'
 * @param params  get   请求时使用
 * @param data    post  请求时使用
 */

import instance from './config'
const baseUrl = process.env.VUE_APP_URL

// 用户登入信息获取接口
export const Login = () => {
  return instance({
    url: `/user/info`
  })
}
