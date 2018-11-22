var app = require('express')()
var http = require('http').createServer(app);
var io = require('socket.io')(http)

http.listen(3000)

let a = {
  "hasTwoPlayer": true,
  "data": [{
    "nickName": "纳什",
    "gender": 1,
    "language": "zh_CN",
    "city": "",
    "province": "Abu Dhabi",
    "country": "United Arab Emirates",
    "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/HuRNBbcBClVjXslicZWZA6bDvxxETy3VKOzUYiaHhCMuGPNfUYIzbzFfdRJNH0Fs77GSPOHRibTbadSFRgLv4UrvQ/64",
    "answers": [],
    "userIndex": 0
  }]
}

io.sockets.on('connection', function (socket) {
      console.log('来了个人',socket.id)

      socket.emit('login',a)

      socket.on('join', function (data) {
        socket.join('120', function () {
          console.log(data, '加入了120房间')
        })
      })

      socket.on('room', function (data) {
        console.log(data)
        socket.to(data.roomid).emit('from room', data.data)
      })

      socket.emit('news', a);

      socket.on('my other event', function (data) {
        console.log(data);
        socket.broadcast.emit("msg", `${data}来了,欢迎`);
      });
      
      socket.on('disconnect',function(){
        console.log(`${socket.id}离开了`)
        socket.broadcast.emit('close',`${socket.id}离开了`)
      })
      socket.on('chat',function(data){
        socket.to(120).emit('from room', data)
      })
});