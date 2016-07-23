'use strict'

import React from 'react';
import { Link } from 'react-router';

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="description" content="An isomorphic JS application to sample the BT integration" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Isomorphic BT Integration App</title>
          <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="/stylesheets/normalize.css" />
          <link rel="stylesheet" href="/stylesheets/milligram.min.css" />
        </head>
        <body>
          <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/click-count">Click Count</Link>
            </nav>
          </header>
          {this.props.children}
          <script src="/js/app.bundle.js" />
        </body>
      </html>
    );
  }
});

export default Layout;

