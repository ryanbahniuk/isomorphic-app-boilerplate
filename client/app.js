'use strict'

import React from 'react';
import { Router, Route } from 'react-router';
import { render } from 'react-dom';
import Layout from './components/layout';
import Home from './components/home';

render(
  (
    <Router>
      <Route component={Layout}>
        <Route path="/" component={Home} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
);

