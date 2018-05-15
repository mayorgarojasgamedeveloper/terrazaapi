var db = require('../db');

exports.create = function(username,password,name,last_name,email,phone) {
  /*var response = db.INSERT(`users`,
  `username,password,name,last_name,email,phone`,
  `\'${username}\',\'${password}\',\'${name}\',\'${last_name}\',\'${email}\',\'${phone}\'`,
  null,
  `*`);
  return response;*/

  return {
    username: username,
    password: password,
    name: name,
    last_name: last_name,
    email: email,
    phone: phone
  }
};

exports.find = function(username,password) {
  var response = db.SELECT(`users`, `*`, `username=\'${username}\' AND password=\'${password}\'`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`users`);
  return response;
};

exports.view = function(username) {
  var response = db.SELECT(`users`, `*`, `username=\'${username}\'`);
  return response;
};

exports.edit = function(id,username,password,name,last_name,email,phone) {
  var response = db.UPDATE(`users`,
  `username=\'${username}\',password=\'${password}\',name=\'${name}\',last_name=\'${last_name}\',email=\'${email}\',phone=\'${phone}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`users`, `id=${id}`);
  return response;
};
