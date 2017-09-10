import * as React from 'react';
import * as classnames from 'classnames';

interface IState { }
interface IProps extends React.HTMLProps<HTMLDivElement> {
  cones: number;
}

export default class TriCone extends React.Component<IProps, IState> {
  public componentWillMount() {
    this.state = {
    };
  }

  private renderCones(cones: number = 3) {
    const allCones = [];

    for (let i = 0; i < cones; i++) {
      allCones.push(<div key={i} className="cone stacked" />);
    }

    return allCones;
  }

  public render() {
    const { className, cones, ...otherProps } = this.props;
    return (
      <div
        {...otherProps}
        className={classnames({
          [className as string]: !!className,
        })}
      >
        {this.renderCones(cones)}
      </div>
    );
  }
}
