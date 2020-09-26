const bodyParser = require('body-parser')
const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('./teste', (req,res)=>{
    res.send("ok")
})

app.listen(3000, () => {
    console.log('Executando.....')
})