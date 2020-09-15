const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))



app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next)=>{
    const produtoExcluido = bancoDeDados.getProduto(req.params.id)
    res.send(produtoExcluido)
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next)=>{
    res.send(bancoDeDados.excluirProduto(req.params.id))
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}`)
})