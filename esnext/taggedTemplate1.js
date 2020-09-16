// tagged template - processa o teamplate dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const condicao = 'Aprovado'
console.log(tag `${aluno} está ${condicao}`)