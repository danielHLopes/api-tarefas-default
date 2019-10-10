const express = require('express')//importando o express
const app = express()//crio uma variavel do tipo express
require('dotenv').config()//gerenciar o .gitgnore
const morgan = require('morgan')//importo o morgan que ajuda a debugar a api
const YAM = require('yamljs')//processar arquivos .yml
const swaggerUI = require('swagger-ui-express')//formata esse arquivo
const bodyParser = require('body-parser')
const cors = require('cors')
//const bcrypt = require('bcrypt')
 


//usandoo cors que serve para pessoas acessarem sua api de outro lugar
app.use(cors())

app.use(bodyParser.json())//pega tudo do corpo e transforma em json
app.use(bodyParser.urlencoded({extended : true}))

//minha senha do sql é Suporte99
//usar firefox

app.use(morgan('combined'))//toda hora que acessar ai eu gero um log
//documentação-----------------------------
const swaggerDocument = YAM.load('./docs/swagger.yml')
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
const apiRoute = require('./routes/apiRoute')
app.use('/api/v1', apiRoute)
//rotas-----------------------------------------
const tarefaRoute = require('./routes/tarefaRoute')
app.use('/api/v1/tarefas', tarefaRoute)


const port = process.env.PORT//uso a porta do .env

app.listen(port , () =>{
    console.log(`funcionando, porta ${port}`) 
})