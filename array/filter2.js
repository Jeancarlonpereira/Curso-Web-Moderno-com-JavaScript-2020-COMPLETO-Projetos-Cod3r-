Array.prototype.filter2 = function(callback){
    const array = []
    for(let i = 0; i<this.length; i++){
        if(callback(this[i], i, this)){
            array.push(this[i])
        }
    }
    return array
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]



const prodFragil = produto => produto.fragil
const prodCaro = produto => produto.preco >=500
const produtosFiltrados = produtos.filter2(prodCaro).filter2(prodFragil)
console.log(produtosFiltrados)