import * as React from 'react'
import { Redirect, Route, withRouter } from 'react-router'

import { checkIsAdmin, checkAuth } from '@/config/utils'
import { Divider } from 'rc-menu'
// import { Component } from 'react';

export interface IfilterRouterProps {
  component?: any
  path?: string
  rest?: any
}

class MainFilterRouter extends React.Component<any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public filterUint = (): any => {
    if (this.props.location.pathname === this.props.path) {
      console.log(`<==========主路由验证MainFilterRouter ${this.props.path} 拦截==========>`)
      return false
    }
  }
  dirConsole = (data: any) => {
    console.log(data)
  }
  componentWillUnmount() {
    console.log('UNSAFE_componentWillMount')
  }
  // UNSAFE_componentWillUpdate(nextProps: any, nextState: any) {
  //   // console.log('nextProps:' + JSON.stringify(nextProps))
  //   // console.log('nextState:' + JSON.stringify(nextState))
  //   console.log('UNSAFE_componentWillUpdate')
  // }
  // UNSAFE_componentWillMount() {
  //   // console.log('UNSAFE_componentWillMount')
  // }
  public render() {
    // if (this.props.match.path === this.props.path) {
    //   return null
    // }
    if (this.filterUint()) {
      return null
    }
    const props: any = this.props
    const rest: any = this.props.rest
    const Component: any = this.props.component
    // console.log(this)
    if (!Component) {
      return null
    }
    return (
      <Route
        {...props}
        exact={true}
        render={parentProps =>
          //checkAuth 方法判断是否已登录
          true ? <Component {...parentProps} /> : <Redirect to="/aaa" />
        }
      />
    )
  }
}
export default withRouter(MainFilterRouter)
