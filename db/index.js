var {Client} = require('pg');
var Router = require('express-promise-router');

var URL =
process.env.URL ||
'postgresql://postgres:admin@localhost/donleon'
;

var client = new Client(URL);

client.connect((err) => {
  if(err)
    console.error(err);
  else
    console.log('Database Started');
});

exports.INSERT = async function(table_name, columns, values, contition = null, returning = null) {

  var sql = ``;
  sql += `INSERT INTO ${table_name} (${columns})`;
  sql += ` VALUES (${values})`;
  if(contition)
    sql += ` WHERE ${contition}`;
  if(returning)
    sql += ` RETURNING ${returning}`;

  const { rows } = await client.query(sql);
  return rows;
}

exports.SELECT = async function(table_name, columns = '*') {

  var sql = ``;
  sql += `SELECT ${columns}`;
  sql += `FROM ${table_name}`;

  const { rows } = await client.query(sql);
  return rows;
}

exports.UPDATE = async function(table_name, setters, condition) {

  var sql = ``;
  sql += `UPDATE ${table_name}`;
  sql += `SET ${setters}`;
  sql += `WHERE ${condition}`;

  const { rows } = await client.query(sql);
  return rows;
}

exports.DELETE = async function(table_name, condition) {

  var sql = ``;
  sql += `DELETE FROM ${table_name}`;
  sql += `WHERE ${condition}`;

  const { rows } = await client.query(sql);
  return rows;
}
