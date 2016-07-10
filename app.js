'use strict'

import { join } from 'path';
import express from 'express';
import ReactEngine from 'react-engine';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './router';
import indexController from './controllers/index';

const app = express();

const engine = ReactEngine.server.create({
  routes: routes,
  routesFilePath: join(__dirname, 'router.jsx')
});

app.engine('.jsx', engine);
app.set('views', join(__dirname, 'components'));
app.set('view engine', 'jsx');
app.set('view', ReactEngine.expressView);

app.use('/', indexController);

app.use(express.static(join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(404).render('error-404');
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error-500', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error-500', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
