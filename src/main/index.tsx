import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Store';
import { App } from './components/App';

// Import style files
import './styles/main.scss';

const RouterApp = withRouter((props) => <App {...props} />);

const MyApp = () => (
  <Router>
    <Provider store={store}>
      <RouterApp />
    </Provider>
  </Router>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
