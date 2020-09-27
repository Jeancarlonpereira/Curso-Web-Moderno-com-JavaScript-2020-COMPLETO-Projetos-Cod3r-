const bodyParser = require('body-parser')
const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})


const upload = multer({storage}).single('arquivo')

// app.get('/teste', (req,res)=>{
//     res.send("ok")
// })

app.post('/upload', (req, resp)=>{
    upload(req, resp, err => {
        if(err) {
            return resp.end('Ocorreu um erro.')
        }
        resp.end('Concluido com sucesso.')
    })
})
app.listen(3000, () => {
    console.log('Executando.....')
})