import { createStore, applyMiddleware } from 'redux';
// import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import persistedReducer from '../reducers/index';
// import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
// const middleware = routerMiddleware()
// const middlewares = [thunk, middleware];
// var store = createStore(
//     persistedReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['headerTab']//白名单
}
const myPersistReducer = persistReducer(persistConfig, persistedReducer)
const store: any = createStore(
  myPersistReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store)
const storeCofig = {
  store, persistor
}
export default storeCofig