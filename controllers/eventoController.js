var model = require('../models/eventoModel');

exports.create = function(req, res) {
  var response = model.create(req.body.dateStart,req.body.dateEnd,req.body.persons);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.listPackage = function(req, res) {
  var response = model.listPackage(req.params.id);
  return response;
};

exports.view = function(req, res) {
  var response = model.view(req.params.id);
  return response;
};

exports.edit = function(req, res) {
  var response = model.edit(req.body.id,req.body.dateStart,req.body.dateEnd,req.body.persons);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};

exports.createPackage = function(req, res) {
  var response = model.createPackage(req.body.event_id,req.body.package_id);
  return response;
};

exports.deletePackage = function(req, res) {
  var response = model.deletePackage(req.body.event_id,req.body.package_id);
  return response;
};
