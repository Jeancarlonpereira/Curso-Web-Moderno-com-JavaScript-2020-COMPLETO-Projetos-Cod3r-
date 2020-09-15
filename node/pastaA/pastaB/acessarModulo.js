const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const hhtp = require('http')
const http = require('http2')
http.createServer((req, res)=>{
    res.write('Bom dia!!')
    res.end()

}).listen(8080)