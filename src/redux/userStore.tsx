import storeCofig from './store'
import { DispatchProp, InferThunkActionCreatorType } from 'react-redux'
interface UserStoreType {
  stroe: any
  actions: any
  reducers: any
  action: any
  this?: this
}
export const userStore: UserStoreType = {
  stroe: {
    userInfo: {},
    userRespList: {},
    clientHeight: '1000'
  },
  actions: {
    setUserInfo: (payload: any, dispatch: any) => {
      const userInfo = payload
      const userRespList = payload.userRespList
      localStorage.certificate = userInfo.certificate
      dispatch({
        type: userStore.action.userInfo.set,
        payload
      })
      if (userRespList.length) {
        dispatch({
          type: userStore.action.userRespList.set,
          payload: userRespList
        })
      }
    },
    setClientHeight: (payload: any, dispatch: any) => {
      dispatch({
        type: userStore.action.userRespList.set,
        payload
      })
    },
    setUserRespListL: (payload: any, dispatch: any) => {
      dispatch({ type: userStore.action.setUserRespListL.set, payload })
    }
  },
  reducers: {
    userInfo(state: string = userStore.stroe.userInfo, action: any) {
      switch (action.type) {
        case userStore.action.userInfo.get:
          return state
        case userStore.action.userInfo.set:
          return action.payload
        default:
          return state
      }
    },
    userRespList(state: string = userStore.stroe.userInfo, action: any) {
      switch (action.type) {
        case userStore.action.userRespList.get:
          return state
        case userStore.action.userRespList.set:
          return action.payload
        default:
          return state
      }
    },
    clientHeight(state: string = userStore.stroe.clientHeight, action: any) {
      switch (action.type) {
        case userStore.action.clientHeight.get:
          return state
        case userStore.action.clientHeight.set:
          return action.payload
        default:
          return state
      }
    }
  },
  action: {
    clientHeight: {
      get: 'GET_CLIENT_HEIGHT',
      set: 'SET_CLIENT_HEIGHT'
    },
    userInfo: {
      get: 'GET_USERINFO',
      set: 'SET_USERINFO'
    },
    userRespList: {
      get: 'GET_USER_RESP_LIST',
      set: 'SET_USER_RESP_LISTD'
    }
  }
}
