const express = require('express');
const naveEspacialRouter = require('./naveEspacial.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/naveEspacial', naveEspacialRouter);
}

module.exports = routerApi;
