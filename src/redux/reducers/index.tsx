import { combineReducers } from 'redux';
import * as allReducers from './reducers';
import { userStore } from '../userStore';
import { reduxConfg } from '../index';
console.log(reduxConfg)
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['clientHeight', 'isIntercept', 'headerTab']  //  黑白名单
// }
const rootReducer = combineReducers({
  getData: allReducers.getData,
  headerTab: allReducers.headerTab,
  // clientHeight: allReducers.clientHeight,
  isIntercept: allReducers.isIntercept,
  ...userStore.reducers
});
// const persistedReducer = persistReducer(persistConfig, rootReducer)
export default rootReducer;