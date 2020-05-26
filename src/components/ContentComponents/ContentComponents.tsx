import * as React from 'react'
import { routeCofigs, MainFilterRouter } from '@/routers'

import KeepAlive, { AliveScope } from 'react-activation'
import { NoMatch } from '@/components/index'
import { HashRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
export interface IContentComponentsProps {}

export default class ContentComponents extends React.Component<IContentComponentsProps> {
  public routerMap: any = () => {
    return routeCofigs.map((route: any, index: any) => (
      <Route
        exact={true}
        render={prop => {
          const returnBox = route.keepAlive ? (
            <KeepAlive>
              {/* <MainFilterRouter cache={true} path={route.path} component={route.component} {...prop} /> */}
              <route.component cache={true} {...prop} />
            </KeepAlive>
          ) : (
            // <MainFilterRouter path={route.path} component={route.component} {...prop} />
            <route.component cache={true} {...prop} />
          )
          return returnBox
        }}
        path={route.path}
        key={index}
      />
    ))
  }

  public render() {
    return (
      <AliveScope>
        <Switch>
          {/* {this.props.children} */}
          {/* <MainFilterRouter path="*" /> */}
          <Redirect exact={true} from="/main" to="/main/mainIndex" />
          {routeCofigs.length && this.routerMap()}
          <Route component={NoMatch} />
        </Switch>
      </AliveScope>
    )
  }
}
