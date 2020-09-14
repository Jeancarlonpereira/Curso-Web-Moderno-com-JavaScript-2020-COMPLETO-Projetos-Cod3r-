Array.prototype.map2 = function(callback){
    const array = []
    for(let i =0; i < this.length; i++){
        array.push(callback(this[i], i, this))
    }
    return array
}
const carrinho =[
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços
const onlyPrice = e => JSON.parse(e).preco
resultado = carrinho.map2(onlyPrice)
console.log(resultado)