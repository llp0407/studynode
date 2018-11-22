var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    // fs.readFile('logo.jpg',(err,data)=>{
    //     if(err){
    //         res.end('file not exist!')
    //     }
    //     else {
    //         res.writeHeader(200,{'Context-Type':'text/html'})
    //         res.end(data)
    //     }
    // })
    fs.createReadStream('logo.jpg').pipe(res)
}).listen(8090)