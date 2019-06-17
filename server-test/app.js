var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '831015',
    database: 'class'
});
app.get('/', function (req, res) {
    var sql = 'SELECT * FROM table1';

    connection.connect();
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results);
    });
    
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})