'use strict'

import React from 'react';
import Index from '../components/index';
import store from '../store';

const IndexContainer = React.createClass({
  render: function() {
    return (
      <Index numClicks={store.getState().dataState.get('numClicks')} />
    );
  }
});

export default IndexContainer;

