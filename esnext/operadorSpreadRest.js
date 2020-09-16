// usar spread com objeto

const funcionario = {nome: 'Maria', salario: 1234.99}
const clone = {ativos: true, ...funcionario}
console.log(clone)


// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)