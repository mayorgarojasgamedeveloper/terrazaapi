var db = require('../db');

exports.create = function() {
  var response = db.INSERT();
  return response;
};

exports.find = function() {
  var response = db.SELECT();
  return response;
};

exports.list = function() {
  var response = db.SELECT();
  return response;
};

exports.view = function() {
  var response = db.SELECT();
  return response;
};

exports.edit = function() {
  var response = db.UPDATE();
  return response;
};

exports.delete = function() {
  var response = db.DELETE();
  return response;
};
