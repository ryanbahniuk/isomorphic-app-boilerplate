'use strict'

import React from 'react';
import store from '../store';
import { incrementClicks } from '../actions/actions';

const Index = React.createClass({
  propTypes: {
    numClicks: React.PropTypes.number.isRequired
  },

  handleClick: function() {
    const updatedClicks = this.props.numClicks + 1;
    store.dispatch(incrementClicks(updatedClicks));
  },

  render: function() {
    return (
      <div onClick={this.handleClick}>This has been clicked {this.props.numClicks} times.</div>
    );
  }
});

export default Index;

