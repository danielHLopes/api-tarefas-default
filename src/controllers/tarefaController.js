const conexao = require('../config/conexao')//importo a conexão
const { validationResult } = require('express-validator')

//aqui posso exportar varias funções
exports.listar = (req, res) => {//exportando uma função
    const query = "select * from tarefas"

    conexao.query(query, (err, rows) =>{
        if (err){
            res.status(500)
            res.json({"message" : "Internal Server Error"})

        }else if(rows.length > 0){
            res.status(200)
            res.json(rows)
        }else{
            res.status(404)
            res.json({"message" : "Nenhuma tarefa encontrada"})
        }
    })
}

exports.listarPorId = (req, res) =>{

    const erros = validationResult(req)
    if(!erros.isEmpty()){//verifico se não ha erros
        return res.status(422).json({"erros": erros.array()})//passo os erros em array
    }else{
        const id = req.params.id//pego o parametro que foi passado na url
        const query = "select * from tarefas where id = ?"//concateno o texto com a select

        conexao.query(query, [id], (err, rows) => {
            if (err){
                res.status(500)
                res.json({"message" : "Internal Server Error"})
            }else if(rows.length > 0){
                res.status(200)
                res.json(rows)
            }else{
                res.status(404)
                res.json({"message" : "Nenehuma tarefa encontrada"})
            }
        })
    }
}

exports.inserir = (req, res) => {
    const erros = validationResult(req)
    if(!erros.isEmpty()){//verifico se não ha erros
        return res.status(422).json({"erros": erros.array()})//passo os erros em array
    }else{
        const tarefa = []//crio um array
        tarefa.push(req.body.descricao)
        tarefa.push(req.body.data)
        tarefa.push(req.body.realizado)
        tarefa.push(req.body.categoria_id)

        const query = "insert into tarefas (descricao, data, realizado, categoria_id) values (?, ?, ?, ?)"//    a query de inserção

        conexao.query(query, tarefa, (err, rows) =>{
            if(err){
                res.status(500)
                res.json({"message" : "Internal Server Error"})
                Console.log(err)
            }else{
                res.status(201)
                res.json({"message" : "tarefa cadastrada com sucesso", "id": rows.insertid})
            }
        })
    }
}

exports.alterar = (req, res) => {
    const erros = validationResult(req)
    if(!erros.isEmpty()){//verifico se não ha erros
        return res.status(422).json({"erros": erros.array()})//passo os erros em array
    }else{
    const tarefa = []//crio um array
    tarefa.push(req.body.descricao)
    tarefa.push(req.body.data)
    tarefa.push(req.body.realizado)
    tarefa.push(req.body.categoria_id)
    tarefa.push(req.params.id)

    const query = "update tarefas set descricao = ?, data = ?, realizado = ?, categoria_id = ? where id = ?"//a query de inserção

    conexao.query(query, tarefa, (err, rows) =>{
        if(err){
            res.status(500)
            res.json({"message" : "Internal Server Error"})
            Console.log(err)
        }else if(rows.affectedRows > 0){
            res.status(202)
            res.json({"message" : "tarefa alterada com sucesso", "id": req.params.id})
        
        }else{
            res.status(404)
            res.json({"message" : "tarefa nao encontrada"})
        }
    })
    }
}


exports.deletar = (req,res) => {
    const erros = validationResult(req)
    if(!erros.isEmpty()){//verifico se não ha erros
        return res.status(422).json({"erros": erros.array()})//passo os erros em array
    }else{
    const tarefa = req.params.id

    const query = "delete from tarefas where id = ?"

    conexao.query(query, tarefa, (err, rows) =>{
        if(err){
            res.status(500)
            res.json({"message" : "Internal Server Error"})
            Console.log(err)
        }else if(rows.affectedRows > 0){
            res.status(200)
            res.json({"message" : "tarefa deletada com sucesso", "id": req.params.id})
        
        }else{
            res.status(404)
            res.json({"message" : "tarefa nao encontrada"})
        }
    })
}
}