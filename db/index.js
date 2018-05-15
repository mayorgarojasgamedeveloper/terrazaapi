var {Client} = require('pg');
var Router = require('express-promise-router');

var URL = 'postgres://dnwnqleoapywpz:54d4dafd1fa77c603b55a6a8f2cc6424ee83fe66382d7d9126bcd46078031e58@ec2-23-23-248-192.compute-1.amazonaws.com:5432/d4uio1gl8m9cga';
//var URL = 'postgres://postgres:admin@127.0.0.1/donleon';
var client = new Client(URL);

client.connect((err) => {
  if(err)
    console.error(err);
  else
    console.log('Database Started');
});

exports.INSERT = function(table_name, columns, values, contition = null, returning = null) {

  var sql = ``;
  sql += `INSERT INTO ${table_name} (${columns})`;
  sql += ` VALUES (${values})`;
  if(contition !== null)
    sql += ` WHERE ${contition}`;
  if(returning !== null)
    sql += ` RETURNING ${returning}`;

  const resp = client.query(sql);
  return resp;
}

exports.SELECT = function(table_name, columns = '*', condition = null) {

  var sql = ``;
  sql += `SELECT ${columns}`;
  sql += ` FROM ${table_name}`;
  if(condition !== null)
    sql += ` WHERE ${condition}`;

  const resp = client.query(sql);
  return resp;
}

exports.UPDATE = async function(table_name, setters, condition, returning = null) {

  var sql = ``;
  sql += `UPDATE ${table_name}`;
  sql += ` SET ${setters}`;
  sql += ` WHERE ${condition}`;
  if(returning !== null)
    sql += ` RETURNING ${returning}`;

  const { rows } = await client.query(sql);
  return rows;
}

exports.DELETE = async function(table_name, condition) {

  var sql = ``;
  sql += `DELETE FROM ${table_name}`;
  sql += ` WHERE ${condition}`;
  const { rows } = await client.query(sql);
  return rows;
}

exports.NOW = async function() {

  var sql = `SELECT NOW()`;
  const { rows } = await client.query(sql);
  return rows;
}
