let socket = io()
const chat = {
    button: document.querySelector('#button'),
    username: document.querySelector('#username'),
    mensage: document.querySelector('#mensage')
}
const handleChat = {
    emitMensage: ()=>{
        socket.emit('sendMensage', { author: chat.username.value, mensage: chat.mensage.value})
        handleChat.renderMensage(chat)
        console.log(chat)
    },
    renderMensage: (msg)=>{
        document.querySelector('.messages').innerHTML += `<div class="mensage" style="text-align: end;"><strong class="color">@${msg.username.value}</strong>: ${msg.mensage.value}</div>`
    }

}

socket.on('broadcastMessage', function(mensage){
    document.querySelector('.messages').innerHTML += `<div style="text-align: init;"><strong>@${mensage.author}</strong>: ${mensage.mensage}</div>`
})

button.addEventListener('click', handleChat.emitMensage)