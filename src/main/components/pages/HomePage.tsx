import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Storyboard from './Storyboard';

export default (props: RouteComponentProps<{}>) => (
  <Storyboard className="storyboard" />
);
