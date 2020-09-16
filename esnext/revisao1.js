// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template Striing
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Desctructuring
const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)

const [x,,y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome)

const {idade : i, nome: n} = {nome: 'Ana', idade: 9}
console.log(i, n)