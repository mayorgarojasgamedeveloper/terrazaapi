var model = require('../models/clienteModel');

exports.create = function(req, res) {
  var response = model.create(req.body.score,req.body.comment,req.body.name,req.body.last_name,req.body.email,req.body.phone);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.view = function(req, res) {
  var response = model.view(req.params.id);
  return response;
};

exports.edit = function(req, res) {
  var response = model.edit(req.body.id,req.body.score,req.body.comment,req.body.name,req.body.last_name,req.body.email,req.body.phone);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
