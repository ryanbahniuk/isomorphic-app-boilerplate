'use strict'

import React from 'react';
import ClickCount from '../components/click-count';
import store from '../store';

function extractNumClicks() {
  return store.getState().dataState.get('numClicks');
}

const ClickCountContainer = React.createClass({
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

  componentDidMount: function() {
    store.subscribe(this.handleChange);
  },

  render: function() {
    return (
      <ClickCount numClicks={this.state.numClicks} />
    );
  }
});

export default ClickCountContainer;

