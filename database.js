var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'example',
  database : 'dbbackend'
});
 
connection.connect();