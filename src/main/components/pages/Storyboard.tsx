import * as React from 'react';
import { withRouter } from 'react-router-dom';
import * as classnames from 'classnames';

import {
} from '../';

interface IProps extends React.HTMLProps<HTMLDivElement> {
}

export default (props: IProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={classnames({
        [className as string]: !!className,
      })}
    >
      {children}
      <div className="test" />
    </div>
  );
};
