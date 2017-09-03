import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Page from './Page';

export default (props: RouteComponentProps<{}>) => (
  <Page className="home-page" />
);
