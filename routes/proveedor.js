var express = require('express');
var controller = require('../controllers/proveedorController');
var router = express.Router();

router.post('/', function(req, res, next) {
  var response = controller.create(req, res);
  res.json(response);
});

router.get('/', async function(req, res, next) {
  var response = await controller.list(req, res);
  res.json(response);
});

router.get('/:id', function(req, res, next) {
  var response = controller.view(req, res);
  res.json(response);
});

router.put('/', function(req, res, next) {
  var response = controller.edit(req, res);
  res.json(response);
});

router.delete('/', function(req, res, next) {
  var response = controller.delete(req, res);
  res.json(response);
});

module.exports = router;
