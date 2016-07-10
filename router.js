'use strict'

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Layout from './components/layout';
import Index from './components/index';

const router = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path='/' component={Index} />
    </Route>
  </Router>
);

export default router;

