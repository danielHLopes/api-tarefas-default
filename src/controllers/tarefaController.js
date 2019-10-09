const conexao = require('../config/conexao')//importo a conexão

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

exports.inserir = (req, res) => {
    const tarefa = {}//crio um array
    tarefa.descricao = req.body.descricao
    tarefa.data = req.body.data
    tarefa.realizado = req.body.realizado
    tarefa.categoria_id = req.body.categoria_id

    const query = "insert into tarefas (descricao, data, realizado, categoria_id) values (?, ?, ?, ?)"//a query de inserção

    conexao.query(query, [tarefa.descricao,tarefa.data,tarefa.realizado,tarefa.categoria_id], (err, rows) =>{
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

