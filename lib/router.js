'use strict'

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Layout from './components/layout';
import IndexContainer from './containers/index';

const router = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path='/' component={IndexContainer} />
    </Route>
  </Router>
);

export default router;

