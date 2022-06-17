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
          message: 'Spacecrafts listed'
      })
  } catch (err) {
      next(err);
  }
});

router.get('/:spacecraftId', async function (req, res, next) {
  const { spacecraftId } = req.params;
  try {
    const spacecraft = await service.find({spacecraftId});

    res.status(200).json({
      data: spacecraft,
      message: 'Spacecraft geted'
    })
  } catch (err) {
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  const request = req.body;
  try {
    const addSpacecraft = await service.createSpacecraft(request);

    res.status(201).json({
      data: addSpacecraft,
      message: 'Spacecraft added'
    });
  } catch (err) {
      next(err)
    }
  });

  router.put('/:spacecraftId', async function (req, res, next) {
    const { spacecraftId } = req.params;
    const { body: message } = req;

    try {
        const updateSpacecraft = await service.updateSpacecraft({ spacecraftId, message });

        res.status(200).json({
            data: updateSpacecraft,
            message : 'Spacecraft was updated'
        });
    } catch (err) {
        next(err);
    }
  });

  router.delete('/:spacecraftId', async function (req, res, next) {
      const { spacecraftId } = req.params;
      try {
          const deleteSpacecraftId = await service.deleteSpacecraft({spacecraftId});

          res.status(200).json({
              data: deleteSpacecraftId,
              message: 'Spacecraft deleted'
          });
      } catch(err) {
          next(err);
      }
  });


module.exports = router;
