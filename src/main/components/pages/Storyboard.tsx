import * as React from 'react';
import { withRouter } from 'react-router-dom';
import * as classnames from 'classnames';

import {
} from '../';

import {
  Scene1,
} from '../scenes';

interface IState {
  scene: number;
}

interface IProps extends React.HTMLProps<HTMLDivElement> {
}

export default class Storyboard extends React.Component<IProps, IState> {
  public componentWillMount() {
    this.state = {
      scene: 1,
    };
  }

  public render() {
    const { className, ...otherProps } = this.props;

    return (
      <div
        {...otherProps}
        className={classnames({
          [className as string]: !!className,
        })}
      >
        {this.state.scene === 1 && <Scene1 />}
      </div>
    );
  }
}
