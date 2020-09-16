// Arrow function
const soma = (a,b) => a + b
console.log(soma(2,3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais Forte')

// operador rest
function total(...nuemros){
    let total = 0
    nuemros.forEach(n=> total+= n)
    return total
}

console.log(total(2,3,4,5))