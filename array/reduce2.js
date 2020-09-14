const alunos = [ 
    {nome: 'João',nota: 7.3, bolsista: false},
    {nome: 'Maria',nota: 9.2, bolsista: true},
    {nome: 'Pedro',nota: 9.8, bolsista: false},
    {nome: 'Ana',nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?


const alunoBolsista = aluno => aluno.bolsista
const desafio1 = alunos.map(alunoBolsista).reduce((acc, aluno)=>{
    return acc && aluno
})
console.log(desafio1)

// Desafio 2: Algum aluno é bolsistas?
const desafio2 = alunos.map(alunoBolsista).reduce((acc, aluno)=>{
    return acc || aluno
})
console.log(desafio2)