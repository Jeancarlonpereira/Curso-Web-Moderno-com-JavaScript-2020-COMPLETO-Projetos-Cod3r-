for(let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for(let i in assuntosEcma){
    console.log(console.log(i))
}

for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promisse', { abordado: true}],
])

for(let assunto of assuntoMap){
    console.log(assunto)
}

for (let chave of assuntoMap.keys()){
    console.log(chave)
}

for (let valor of assuntoMap.values()){
    console.log(valor)
}


for (let [ ch, vl] of assuntoMap.entries()){{
    consolelog(ch,vl)
}}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}