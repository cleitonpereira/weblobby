const express = require('express') //importacao do pacote
const db = require("./db");
const app = express()//instanciando express
const cors = require('cors')
var lista

(async function () {
    lista = JSON.parse(JSON.stringify(await db.selectVisita()))
})()

app.use(cors()) //habilitando cors na nossa aplicacao

app.get('/select', function (req, res) { //endereco da requisicao onde e retornado json de consulta
    res.send(lista)
})
app.listen(3000) //execucao do servidor