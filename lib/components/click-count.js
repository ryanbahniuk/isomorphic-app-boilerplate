'use strict'

import React from 'react';
import store from '../store';

const ClickCount = React.createClass({
  propTypes: {
    numClicks: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div>The other page has been clicked {this.props.numClicks} times.</div>
    );
  }
});

export default ClickCount;

