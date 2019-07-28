var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '831015',       
  port: '3306',                   
  database: 'class' 
}); 
 
connection.connect();
var  sql = 'SELECT * FROM websites WHERE alexa=1';
var  sql = 'SELECT * FROM websites WHERE alexa=1';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();