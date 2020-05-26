// import getData  from '../../config/getData'
import * as all from '../actionType'
//  设置获取window高度
export const getClientHeight = (payload: any) => ({
  type: all.getClientHeight,
  payload: { clientHeight: payload }
})
export const setClientHeight = (payload: any) => ({
  type: all.setClientHeight,
  payload
})
//  设置权限状态 isIntercept
export const setIsIntercept = (payload: any) => ({
  type: all.setIsIntercept,
  payload
})
//  设置HeaderTab数据
export const setHeaderTab = (payload: any) => ({
  type: all.setHeaderTab,
  payload
})
