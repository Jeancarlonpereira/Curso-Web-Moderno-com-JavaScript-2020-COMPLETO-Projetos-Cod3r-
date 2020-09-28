import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import {pessoasEmail, pessoasComparar}  from './dados.js'
const fs = require('fs')
let pessoasComEmail = []
let pessoasSemEmail = []

let participantes = pessoasComparar.filter(function(item, pos) {
    return pessoasComparar.indexOf(item) == pos;
})

let cont = 0
for(let i of participantes){
    cont = 0
    i = i.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    for(let z of pessoasEmail){
        
        z.nome = z.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if(i.toUpperCase().trim() == z.nome.toUpperCase().trim()){
            pessoasComEmail.push(z)
            cont = 1 
            }
   }
   if(cont != 1){
    pessoasSemEmail.push(i)
   }
}

const saveFile = (nameFile,data) =>{
    let file = fs.createWriteStream(nameFile);
    file.on('error', function(err) { Console.log(err) });
    data.forEach(value => 
        file.write(`${JSON.stringify(value)}\r\n`));
    file.end();
}

saveFile('PessoasComEmail.txt', pessoasEmail)
saveFile('PessoasSemEmail.txt', pessoasSemEmail)