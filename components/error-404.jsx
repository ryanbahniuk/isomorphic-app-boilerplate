'use strict'

import React from 'react';

const Error404 = React.createClass({
  componentWillMount: () => {
    console.log('mounting 404');
  },

  render: () => {
    return (
      <div>This page does not exist.</div>
    );
  }
});

export default Error404;

