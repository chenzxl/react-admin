import { any } from 'prop-types'

interface UserStoreType {
  stroe: any
  mutations: any
  reducers: any
  action: any
}
export const outerStore: UserStoreType = {
  stroe: {
    aaa: 0
  },
  mutations: {
    GET_CLIENT_AAA: (res: any): any => {
      return {
        type: outerStore.action.userInfo.set,
        payload: res
      }
    }
  },
  reducers: {
    aaa: (state: string = outerStore.stroe.clientHeight, action: any) => {
      switch (action.type) {
        case outerStore.action.aaa.get:
          return state
        case outerStore.action.aaa.set:
          return action.payload
        default:
          return state
      }
    }
  },
  action: {
    aaa: {
      get: 'GET_CLIENT_AAA',
      set: 'SET_CLIENT_AAA'
    }
  }
}
