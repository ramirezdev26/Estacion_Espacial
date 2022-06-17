const express = require('express');
const NaveEspacialService = require('../services/naveEspacial.service');

const router = express.Router();
const service = new NaveEspacialService();

router.get('/', async function (req, res, next) {
  req.query;
  try {
      const spacecraft = await service.findAll();

      res.status(200).json({
          data: spacecraft,
          alert: 'spacecrafts listed'
      })
  } catch (err) {
      next(err);
  }
});

module.exports = router;
