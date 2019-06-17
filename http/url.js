var http = require('http')
var url = require('url')

var server = http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url,true).query;
    
    var age = query.age
    query = JSON.stringify(query)
    console.log('pathname:'+ pathname)
    console.log("query:" + query)
    console.log("age:" + age)
    res.end()
}).listen(3000)