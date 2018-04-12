import * as React from 'react';
import TriCone from '../TriCone';

interface IState { }
interface IProps extends React.HTMLProps<HTMLDivElement> {
}

export default class Scene1 extends React.Component<IProps, IState> {
  public componentWillMount() {
    this.state = {
    };
  }

  public render() {
    return (
      <div className="scene-container">
        {/* <div className="block stacked" /> */}
        <div className="double-arrow stacked" />
        <div className="double-arrow double-arrow--delay stacked" />
        <div className="bar stacked" />
        <div className="bar bar-2 stacked" />
        <div className="bar bar-3 stacked" />
        <div className="bar bar-4 stacked" />
        <div className="circle stacked" />
        <TriCone className="stacked" cones={20} />
        <div className="main-character stacked" />
        <div className="main-character main-character--reverse stacked" />
      </div>
    );
  }
}
