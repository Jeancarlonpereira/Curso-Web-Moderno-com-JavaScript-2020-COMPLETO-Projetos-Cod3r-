const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response=>{
    const funcionarios = response.data
    console.log(funcionarios
        .filter(mulher)
        .filter(china)
        .reduce(menorSalario))
})


const mulher = m => m.genero === 'F'
const china = c => c.pais === 'China'
const menorSalario = (menor, proximo) =>{ 
return menor.salario < proximo.salario ? menor : proximo }