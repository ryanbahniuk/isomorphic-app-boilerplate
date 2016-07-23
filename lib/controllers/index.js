'use strict'

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('/');
});

router.get('/click-count', (req, res) => {
  res.render('/click-count');
});

export default router;

