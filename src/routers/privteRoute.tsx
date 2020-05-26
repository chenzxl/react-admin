import * as React from 'react'
import routeCofigs from './routeCofig'

import KeepAlive, { AliveScope } from 'react-activation'
import { NoMatch } from '@/components/index'
import { HashRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

export interface IPrivteRouteProps {
  location?: any
}

export default class PrivteRoute extends React.Component<IPrivteRouteProps> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  shouldComponentUpdate(nextProps: any) {
    console.log(nextProps)
    return nextProps.location !== this.props.location
  }
  public render() {
    return (
      <AliveScope>
        <Switch>
          {this.props.children}
          {/* <Redirect exact from="/main" to="/main/mainIndex" /> */}
          {routeCofigs.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              render={prop => {
                const returnBox = route.keepAlive ? (
                  <KeepAlive>
                    <route.component cache={true} {...prop} />
                  </KeepAlive>
                ) : (
                  <route.component cache={true} {...prop} />
                )
                return returnBox
              }}
              exact={route.exact}
            />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </AliveScope>
    )
  }
}
