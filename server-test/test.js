var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '831015',
  database : 'class'
});

var  sql = 'SELECT * FROM table1';

connection.connect();
 

connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});