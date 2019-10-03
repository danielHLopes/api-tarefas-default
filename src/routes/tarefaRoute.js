const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')//importo a pasta

route.get('/', tarefaController.listar)//chamo o metodo listar toda vez que colocar o / no final na urn

module.exports = route//exporto o modulo ^ que criei com uma unica função
