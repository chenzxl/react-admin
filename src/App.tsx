import * as React from 'react'
import { Helmet } from 'react-helmet'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './assets/styles/index.scss'
import storeCofig from './redux/store'
import RouteMap from './routers/RouteMap'
import { reduxConfg } from './redux'

// storeCofig.store.subscribe(() => { //监听state变化
//   console.log(storeCofig.store.getState())
// });
// console.log(storeCofig.store)
setTimeout(() => {
  // storeCofig.store.dispatch(
  //   {
  //     type: 'SET_CLIENT_HEIGHT',
  //     payload: 111
  //   }
  // )
  // console.log(reduxConfg)
}, 3000)
class App extends React.Component {
  render() {
    return (
      <div className="App h100p">
        <Helmet>
          <title>saafsreact000</title>
          <meta name="title" content="Bilibili-( ゜- ゜)つロ干杯~" />
          <meta name="keywords" content="React,服务端渲染" />
          <meta name="description" content="高仿Bilibili" />
          {/* <link rel="stylesheet" href="" /> */}
        </Helmet>
        <Provider store={storeCofig.store}>
          <PersistGate loading={null} persistor={storeCofig.persistor}>
            {/* <BrowserRouter> */}
            <RouteMap />
            {/* </BrowserRouter> */}
          </PersistGate>
        </Provider>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button onClick={this._eventBtb} type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
      </div>
    )
  }
}

export default App
