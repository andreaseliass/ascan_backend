var mysql = require('mysql');

var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'dbbackend',
  port: '3307'
});
 
connection.getConnection();
// connection.connect();

module.exports = connection;