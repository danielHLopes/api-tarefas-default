const express = require('express')//importando o express
const app = express()//crio uma variavel do tipo express
require('dotenv').config()//gerenciar o .gitgnore
const morgan = require('morgan')//importo o morgan que ajuda a debugar a api
//minha senha do sql é Suporte99
//usar firefox

app.use(morgan('combined'))//toda hora que acessar ai eu gero um log

//rotas-----------------------------------------
const tarefaRoute = require('./routes/tarefaRoute')
app.use('/api/v1/tarefas', tarefaRoute)


const port = process.env.PORT//uso a porta do .env

app.listen(port , () =>{
    console.log(`funcionando, porta ${port}`) 
})