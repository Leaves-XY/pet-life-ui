import request from '@/utils/request'

// 查询举报信息列表
export function listComplaint(query) {
  return request({
    url: '/adopt/complaint/list',
    method: 'get',
    params: query
  })
}

// 查询举报信息详细
export function getComplaint(id) {
  return request({
    url: '/adopt/complaint/' + id,
    method: 'get'
  })
}

// 新增举报信息
export function addComplaint(data) {
  return request({
    url: '/adopt/complaint',
    method: 'post',
    data: data
  })
}

// 修改举报信息
export function updateComplaint(data) {
  return request({
    url: '/adopt/complaint',
    method: 'put',
    data: data
  })
}

// 删除举报信息
export function delComplaint(id) {
  return request({
    url: '/adopt/complaint/' + id,
    method: 'delete'
  })
}
