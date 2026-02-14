import request from '@/utils/request'
// 用户登录（已完成）
export function login(data) {
  return request({
    url: '/api/base/login',
    method: 'post',
    data
  })
}

export function refreshToken() {
  return request({
    url: '/api/base/refreshToken',
    method: 'post'
  })
}
// 用户退出接口（已完成）
export function logout() {
  return request({
    url: '/api/base/logout',
    method: 'post'
  })
}
// 获取配置信息
export function getConfig() {
  return request({
    url: '/api/base/config',
    method: 'get'
  })
}

// 更新目录服务配置
export function updateDirectoryConfig(data) {
  return request({
    url: '/api/base/directoryConfig',
    method: 'post',
    data
  })
}

// 更新第三方平台配置
export function updateThirdPartyConfig(data) {
  return request({
    url: '/api/base/thirdPartyConfig',
    method: 'post',
    data
  })
}

// 测试第三方平台配置
export function testThirdPartyConfig(data) {
  return request({
    url: '/api/base/thirdPartyConfig/test',
    method: 'post',
    data
  })
}
// 获取版本信息
export function getVersion() {
  return request({
    url: '/api/base/version',
    method: 'get'
  })
}
