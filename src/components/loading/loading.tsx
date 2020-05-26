import * as React from 'react';

import './loading.scss';
import { LoadingPropsType } from "./PropsType";
import * as Loadable from "react-loadable";

export interface LoadingProps extends LoadingPropsType {

}
type thisProps = LoadingProps & Loadable.LoadingComponentProps;

interface IState {
}
class Loading extends React.Component<thisProps, IState> {
  _shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        {/* { <div className="preloader tc">
                    <div className="loading-text">程序加载中</div>
                    <div className="cs-loader-inner" id="cs-loader-inner">
                        <label> ●</label>
                        <label> ●</label>
                        <label> ●</label>
                        <label> ●</label>
                        <label> ●</label>
                        <label> ●</label>
                    </div>
                </div> } */}
        <div className="spinner" /></div>
    )
  }
}

export default Loading