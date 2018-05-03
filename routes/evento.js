var express = require('express');
var controller = require('../controllers/eventoController');
var router = express.Router();

router.post('/', async function(req, res, next) {
  var response = await controller.create(req, res);
  res.json(response);
});

router.get('/', async function(req, res, next) {
  var response = await controller.list(req, res);
  res.json(response);
});

router.get('/:id', async function(req, res, next) {
  var response = await controller.view(req, res);
  res.json(response);
});

router.put('/', async function(req, res, next) {
  var response = await controller.edit(req, res);
  res.json(response);
});

router.delete('/', async function(req, res, next) {
  var response = await controller.delete(req, res);
  res.json(response);
});

router.get('/:id/package', async function(req, res, next) {
  var response = await controller.listPackage(req, res);
  res.json(response);
});

router.post('/package', async function(req, res, next) {
  var response = await controller.createPackage(req, res);
  res.json(response);
});

router.delete('/package', async function(req, res, next) {
  var response = await controller.deletePackage(req, res);
  res.json(response);
});

module.exports = router;
