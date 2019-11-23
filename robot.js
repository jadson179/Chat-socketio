const express = require('express')
const path = require('path')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const sgMail = require('@sendgrid/mail');

app.use(express.static(path.join(__dirname,'public')))

const services = {
    email: (from,email,subject,mensage)=>{
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: email,
        from: from,
        subject: subject,
        text: mensage,
        html: `<strong>${mensage}</strong>`,
      };
      sgMail.send(msg);
    },
    robot:()=>{
        return { 
                    author: 'Robot', 
                    mensage: 'Select the service:\<br>\
                              email<br>\
                              whats<br>\
                              search<br>\
                '}; 
    }
}
io.on('connection', socket=>{
    socket.on('sendMensage', event=>{
        
        const data = services[`${event.mensage.split('-')[0]}`]? services[`${event.mensage.split('-')[0]}`](event.mensage.split('-')[1],event.mensage.split('-')[2],event.mensage.split('-')[3],event.mensage.split('-')[4]):event

        socket.broadcast.emit('broadcastMessage', data)
        socket.emit('broadcastMessage', data)
    }) 
})


module.exports = server
