import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';

import Layout from './components/Layout';
import Splash from './components/Splash';
import LocationPage from './components/LocationPage';

import store from './store';

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Splash} />
          <Route path="/location" component={LocationPage} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
document.getElementById('root')
);
