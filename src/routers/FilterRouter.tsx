import * as React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

import { checkIsAdmin, checkAuth } from '@/config/utils'
// import { Component } from 'react';

export interface IfilterRouterProps {
  component?: any
  path: string
  rest?: any
}

export default class FilterRouter extends React.Component<IfilterRouterProps> {
  constructor(props: IfilterRouterProps) {
    super(props)
  }
  public render() {
    console.log('<==========主路由验证FilterRouter==========>')
    const props: any = this.props
    const rest: any = this.props.rest
    const Component: any = this.props.component
    if (!Component) {
      return null
    }
    return (
      <Route
        {...rest}
        exact={true}
        render={parentProps =>
          //checkAuth 方法判断是否已登录
          true ? <Component {...parentProps} /> : <Redirect to="/aaa" />
        }
      />
    )
  }
}
