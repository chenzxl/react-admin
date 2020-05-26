// import getDataFunctions  from '../../config/getData'
import * as all from '../actionType/index'
//获取窗口高度
const height = document.body.clientHeight
export const clientHeight = (state = height, { type, payload }: { type: string; [payload: string]: any }) => {
  switch (type) {
    case all.getClientHeight:
      return state
    case all.setClientHeight:
      return payload
    default:
      return state
  }
}
//获取权限
export const isIntercept = (state = false, { type, payload }: { type: string; [payload: string]: any }) => {
  switch (type) {
    case all.getIsIntercept:
      return state
    case all.setIsIntercept:
      return payload
    default:
      return state
  }
}
// 接口封装
// const getDataFunction = getDataFunctions
export const getData = (state = {}, { type, payload }: { type: string; [payload: string]: any }) => {
  return state
}
const headerTabInitStore = [
  {
    name: '主页',
    url: '/DefaultMainPage'
    // "id":"-1",
    // "isParent":"",
    // "active":true,
    // "version":"-1"
  }
]
export const headerTab = (state = headerTabInitStore, { type, payload }: { type: string; [payload: string]: any }) => {
  switch (type) {
    case all.getHeaderTab:
      return state
    case all.setHeaderTab:
      return payload
    default:
      return state
  }
}
