import * as React from 'react';
import './loading.less';
export interface ILoadingProps {
}

export interface ILoadingState {
}

export default class Loading extends React.Component<ILoadingProps, ILoadingState> {
  constructor(props: ILoadingProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className="spinner">

      </div>
    );
  }
}
