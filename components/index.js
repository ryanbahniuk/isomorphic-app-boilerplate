'use strict'

import React from 'react';

const Home = React.createClass({
  getInitialState: function() {
    return {
      numClicks: 0
    }
  },

  handleClick: function() {
    this.setState({
      numClicks: this.state.numClicks + 1
    });
  },

  render: function() {
    return (
      <div onClick={this.handleClick}>This has been clicked {this.state.numClicks} times.</div>
    );
  }
});

export default Home;

