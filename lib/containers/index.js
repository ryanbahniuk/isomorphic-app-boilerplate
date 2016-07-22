'use strict'

import React from 'react';
import Index from '../components/index';
import store from '../store';

function extractNumClicks() {
  return store.getState().dataState.get('numClicks');
}

const IndexContainer = React.createClass({
  getInitialState: function() {
    return {
      numClicks: extractNumClicks()
    }
  },

  handleChange: function() {
    this.setState({
      numClicks: extractNumClicks()
    });
  },

  componentWillMount: function() {
    store.subscribe(this.handleChange);
  },

  render: function() {
    return (
      <Index numClicks={this.state.numClicks} />
    );
  }
});

export default IndexContainer;

