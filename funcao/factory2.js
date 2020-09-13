// Factory simples

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.20
    }
}

console.log(criarProduto('Notebook',2900))
console.log(criarProduto('iPad',2000))