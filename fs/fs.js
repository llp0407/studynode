var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') return
    var userid = parseInt(Math.random() * 89999) + 10000
    console.log(userid + '开始执行')
    
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF8"
    })
    fs.readFile('./test/1.txt', (err, data) => {
        if (err) throw err
        console.log(userid + '文件读取完毕')
        res.end(data)
    })
    fs.stat('./test/1.txt',(err,data)=>{
        //检测这个路径是不是文件夹
        console.log(data.isDirectory())
    })
    fs.readdir('./test',(err,files)=>{
        console.log(files)
    })
}).listen(3000)