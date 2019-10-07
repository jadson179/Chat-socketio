const express = require('express')
const path = require('path')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname,'public')))

io.on('connection', socket=>{
    console.log(socket.id)

    socket.on('sendMessage', data=>{
    socket.broadcast.emit('sendAllUserMessage', data)
    }) 

})

server.listen(3000)


