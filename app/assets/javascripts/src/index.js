import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import ConfigureStore from './helpers/store';

import Login from './containers/Login';
import Counter from './containers/Counter';
import TestPage from './containers/TestPage';

import GuestOnly from './components/Auth/GuestOnly';
import LoginOnly from './components/Auth/LoginOnly';
import Layout from './components/Layout';


import '../../stylesheets/style.scss';

const store = ConfigureStore();

render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/">
          <Route components={LoginOnly}>
            <Route components={Layout}>
              <IndexRoute components={Counter}/>
              <Route path="/counter" components={Counter} />
            </Route>
          </Route>
          <Route components={GuestOnly}>
            <Route path="/login" components={Login} />
            <Route path="/test" components={TestPage} />
          </Route>
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('root')
);
