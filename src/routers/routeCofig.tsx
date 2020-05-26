import * as Loadable from 'react-loadable'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Login } from '../page/index'
import { router } from '@/config'
console.log(router)
const routeCofigs: any = [
  {
    path: '/',
    routeName: '/',
    exact: true,
    component: Login,
    keepAlive: true
  },
  {
    path: '/login',
    routeName: '/login',
    component: Login,
    keepAlive: true
  },
  ...router
]
export default routeCofigs
