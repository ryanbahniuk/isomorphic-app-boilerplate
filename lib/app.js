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
  routesFilePath: join(__dirname, 'router.js')
});

app.engine('.js', engine);
app.set('views', join(__dirname, 'components'));
app.set('view engine', 'js');
app.set('view', ReactEngine.expressView);

app.use('/', indexController);

app.use(express.static(join(__dirname, 'assets')));
app.use(favicon(join(__dirname, 'assets', 'images', 'favicon.ico')));
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
