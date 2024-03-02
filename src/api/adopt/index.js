import request from '@/utils/request'

export function adoptStatistics(query) {
  return request({
    url: '/adopt/adopt/statistics',
    method: 'get',
    params: query
  })
}

export function findStatistics(query) {
  return request({
    url: '/adopt/find/statistics',
    method: 'get',
    params: query
  })
}

// 最近30天
export function petReleaseStatisticsForDate(query) {
  return request({
    url: '/adopt/adopt/petReleaseStatisticsForDate',
    method: 'get',
    params: query
  })
}
