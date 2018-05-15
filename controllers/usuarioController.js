var model = require('../models/usuarioModel');

exports.create = function(req, res) {
  //var response = model.create(req.body.username,req.body.password,req.body.name,req.body.last_name,req.body.email,req.body.phone);
  //return response;
  return {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone
  }
};

exports.find = function(req, res) {
  var response = model.find(req.params.username,req.params.password);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.view = function(req, res) {
  var response = model.view(req.params.username);
  return response;
};

exports.edit = function(req, res) {
  var response = model.edit(req.body.id,req.body.username,req.body.password,req.body.name,req.body.last_name,req.body.email,req.body.phone);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
