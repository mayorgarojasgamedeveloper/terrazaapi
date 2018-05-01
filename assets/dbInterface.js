var {Client} = require('pg');

var URL = process.env.URL;
var client = new Client(URL);

client.connect((err) => {
  if(err)
    console.error(err);
  else
    console.log('Database Started');
});

exports.INSERT = function() {
  /*
  var sql = `INSERT INTO ${table} (${attr}) VALUES (${values})`;
  if(returning !== null)
    sql += ` RETURNING ${returning}`

  return await client.query(sql);
  */
  return {status: 'Falta programar DB dbInterface INSERT'};
}

exports.SELECT = function() {
  /*
  var sql = `SELECT ${attr} FROM ${table}`;
  if(where !== null)
    sql += ` WHERE ${where}`;
  if(orderBy !== null)
    sql += ` ORDER BY ${orderBy}`;

  return await client.query(sql);
  */
  return {status: 'Falta programar DB dbInterface SELECT'};
}

exports.UPDATE = function() {
  /*
  var sql = `UPDATE ${table} SET ${setters} WHERE ${where}`;
  return await client.query(sql);
  */
  return {status: 'Falta programar DB dbInterface UPDATE'};
}

exports.DELETE = function() {
  /*
  var sql = `DELETE FROM ${table} WHERE ${where}`
  return await client.query(sql);
  */
  return {status: 'Falta programar DB dbInterface DELETE'};
}
