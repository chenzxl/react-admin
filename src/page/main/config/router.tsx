import * as Loadable from 'react-loadable';
import { LoadingComponent } from "@/components/index";
import MainIndex from "../MainIndex"
const router: any = [
  {
    path: "/main",
    routeName: "main",
    component: Loadable({
      loader: () => import('../Home'),
      loading: LoadingComponent
    }),
  },
  {
    path: "/main/mainIndex",
    routeName: "mainIndex",
    exact: true,
    keepAlive: true,
    component: Loadable({
      loader: () => import('../MainIndex'),
      loading: LoadingComponent
    }),
  },
  {
    path: "/main/MainIndexHome",
    routeName: "MainIndexHome",
    exact: true,
    keepAlive: true,
    component: Loadable({
      loader: () => import('../MainIndexHome'),
      loading: LoadingComponent
    }),
  }
]
export default router