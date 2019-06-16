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
    url: `${baseUrl}/login/info`
  })
}

// 附件上传
export const FileUpload = (taskId, data) => {
  return instance({
    method: 'post',
    url: `${baseUrl}/task/${taskId}/attachments/add`,
    data
  })
}

// 待领取列表，工单领取接口
export const TaskSign = (taskId, params) => {
  return instance({
    url: `${baseUrl}/task/${taskId}/sign`,
    params
  })
}

// 流程定义-配置接口
export const ProcDefinitionUpdate = (procDefKey, params) => {
  return instance({
    method: 'put',
    url: `${baseUrl}/asd/${procDefKey}`,
    params
  })
}

// 获取详情信息，全局documentation有save_path
export const DetailWithPath = url => instance.get(url)

// 根据责任地市获取角色列表
export const RoleByCity = city => {
  return instance({
    url: `${baseUrl}/role/${city}`
  })
}

// 获取组织用户列表
export const UserByOrgId = (orgId, params) => {
  return instance({
    url: `${baseUrl}/user/orgId/${orgId}/page`,
    params
  })
}


// 审核不通过时，删除旧文件
export const OldFileDelete = id => {
  return instance({
    method: 'delete',
    url: `${baseUrl}/ab/file/${id}`
  })
}


/**
 * 根据组织机构ID（org）或责任地市ID（group）获取角色列表
 * @param  {String} type  org | group
 * @param  {String} id
 */
export const getRoleByOrgOrGrid = (type, id) => {
  return instance({
    url: `${baseUrl}/abcd/role/${type}/${id}`
  })
}
