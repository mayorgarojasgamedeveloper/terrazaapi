var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/', async function(req, res, next) {
  var response = await db.NOW();
  console.log(response);
  res.send('Bienvenido a la API de Terraza Don Leon      (' + response[0].now + ')');
});
module.exports = router;
