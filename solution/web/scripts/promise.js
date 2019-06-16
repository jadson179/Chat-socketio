var http = require('http')
var port = 3080;
var ip = 'localhost';

import index from '/devops/onloadbrowser.html';  

const server = http.createServer((request, response)=>{
    response.end(index);
})

server.listen(port,ip, ()=>{

})