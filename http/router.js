var http = require('http')

var server = http.createServer((req,res)=>{
    var userurl = req.url
    // console.log(userurl)
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    //判断路由，do something
}).listen(3000)