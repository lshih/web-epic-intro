import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import * as classnames from 'classnames';

import {
  HomePage,
} from './pages/';

interface IState {
  scene: number;
}

export class App extends React.Component<RouteComponentProps<{}>, IState> {
  public componentWillMount() {
    this.state = {
      scene: 0,
    };
  }

  public async componentDidMount() {
  }

  public render() {
    const modernizr = (window as any).Modernizr;

    return (
      <div
        className={classnames({
          application: true,
          touch: modernizr && modernizr.touchevents,
        })}
      >
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
      </div>
    );
  }
}
