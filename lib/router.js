'use strict'

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Layout from './components/layout';
import IndexContainer from './containers/index';
import ClickCountContainer from './containers/click-count';

const router = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path='/' component={IndexContainer} />
      <Route path='/click-count' component={ClickCountContainer} />
    </Route>
  </Router>
);

export default router;

