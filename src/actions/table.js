import { get } from '@/utils/request'
import api from '@/servicer/api'
export function talbeDate (options) {
  return {
    type:"TALBEHOME",
    payload:get(`/aps${api.search}?keyword=`+options)
  }
}
export function delDate (payload) {
  return {
    type:"DELETE",
    payload
  }
}