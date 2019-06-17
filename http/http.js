var http = require ('http')


var server = http.createServer(function(req,res){
    console.log("接到了请求"+req.url)
    res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
    res.write('<h1>完毕</h1>')
    res.end('<h1>完毕</h1>')
}).listen(3000)
