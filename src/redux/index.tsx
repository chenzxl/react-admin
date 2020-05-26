import { userStore } from './userStore'
import { outerStore } from './outerStore'
import storeCofig from './store'
interface ReduxConfigStoreType {
  stroe: any
  actions: any
  reducers: any
  action: any
}
let reduxConfg: ReduxConfigStoreType = {
  stroe: {},
  actions: {},
  reducers: {},
  action: {}
}
function burnish(val: any, oldVal: any) {
  oldVal.stroe = Object.assign(oldVal.stroe, val.stroe)
  oldVal.actions = Object.assign(oldVal.actions, val.actions)
  oldVal.reducers = Object.assign(oldVal.reducers, val.reducers)
  oldVal.action = Object.assign(oldVal.action, val.action)
  return oldVal
}
reduxConfg = burnish(userStore, reduxConfg)
reduxConfg = burnish(outerStore, reduxConfg)

setTimeout(() => {
  storeCofig.store.subscribe(() => {
    //监听state变化
    const store = storeCofig.store.getState()
    reduxConfg.stroe = Object.assign(reduxConfg.stroe, store)
  })
}, 100)
// storeCofig.store.subscribe(() => { //监听state变化
//   console.log(storeCofig.store.getState())
// });

export { reduxConfg }
