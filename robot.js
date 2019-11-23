const express = require('express')
const path = require('path')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const fetch = require('node-fetch')


app.use(express.static(path.join(__dirname,'public')))

const services = {
     email: async (from,email,subject,mensage)=>{
      const msg = {
        personalizations: [
          { to: [
            { email: `${email}`}
            ]}
          ],
          from:{
            email: `${from}`
          },
          subject: `${subject}`,
          content: [
            { 
              type: "text/plain",
              value: `${mensage}`}
            ]
          }
      
          fetch('https://api.sendgrid.com/v3/mail/send',
      { 
        method: 'POST',
        body: JSON.stringify(msg),
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer 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`}
      }
      )
    },
    robot:()=>{
        return { 
                    author: 'Robot 🤖', 
                    mensage: '<strong id="title-service">Serviços</strong>:<br><br>\
                              <strong>email</strong><br>\
                '}; 
    }
}
io.on('connection', socket=>{
    socket.on('sendMensage', event=>{
        
        const data = services[`${event.mensage.split('-')[0]}`]? services[`${event.mensage.split('-')[0]}`](event.mensage.split('-')[1],event.mensage.split('-')[2],event.mensage.split('-')[3],event.mensage.split('-')[4]):event

        if (event.mensage == 'robot'){
            socket.emit('broadcastMessage', data)
        }else {
          socket.broadcast.emit('broadcastMessage', data)
        }
    })
})


module.exports = server
