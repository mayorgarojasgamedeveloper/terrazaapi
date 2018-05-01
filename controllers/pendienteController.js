var model = require('../models/pendienteModel');

exports.create = function(req, res) {
  var response = model.create();
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.view = function(req, res) {
  var response = model.view();
  return response;
};

exports.edit = function(req, res) {
  var response = model.edit();
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete();
  return response;
};
