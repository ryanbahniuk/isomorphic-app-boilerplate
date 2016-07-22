'use strict'

import React from 'react';

const ErrorPage = React.createClass({
  propTypes: {
    message: React.PropTypes.string,
    error: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
        <p>{this.props.error.stack}</p>
      </div>
    );
  }
});

export default ErrorPage;

