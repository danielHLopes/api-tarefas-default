const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')//importo a pasta
const apiController = require('../controllers/apiController')

route.get('/', apiController.verifica,tarefaController.listar)//chamo o metodo listar toda vez que colocar o / no final na urn
route.get('/:id', apiController.verifica, tarefaController.listarPorId)//listo por id, o :id significa que é um parametro
route.post('/', apiController.verifica, tarefaController.inserir)
route.put('/:id', apiController.verifica, tarefaController.alterar)
route.delete('/:id', apiController.verifica, tarefaController.deletar)

module.exports = route//exporto o modulo ^ que criei com uma unica função
