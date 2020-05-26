import * as React from 'react'
import { HashRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import KeepAlive, { AliveScope } from 'react-activation'

import routeCofigs from './routeCofig'
import NoMatch from '../page/NoMatch'
import PrivteRoute from './privteRoute'

import FilterRouter from './FilterRouter'
import MainIndex from '../page/main/MainIndex'
import { router } from '@/config'

export interface IrouteMapProps {}

export interface IrouteMapState {}
const history = createBrowserHistory()
// console.log(createHistory)

export default class RouteMap extends React.Component<IrouteMapProps, IrouteMapState> {
  constructor(props: IrouteMapProps) {
    super(props)

    this.state = {
      routerObject: null
    }
  }
  dirConsole = (data: any) => {
    console.log(data)
  }

  render() {
    return (
      <BrowserRouter>
        <Router>
          <Route history={history}>
            {/* <AliveScope> */}
            {/* <Switch> */}
            <PrivteRoute>{/* <FilterRouter path="/" component={MainIndex} /> */}</PrivteRoute>
            {/* </Switch> */}
            {/* </AliveScope> */}
          </Route>
        </Router>
      </BrowserRouter>
    )
  }
}

{
  /* <Redirect exact from="/main" to="/main/mainIndex" /> */
}
{
  /* <FilterRouter path="/main" component={MainIndex} /> */
}
