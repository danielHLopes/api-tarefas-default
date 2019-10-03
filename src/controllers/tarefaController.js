//aqui posso exportar varias funções
exports.listar = (req, res) => {//exportando uma função
    res.json({
        "mensagem" : "Listando todos os usuarios"
    })
}