const { check } = require('express-validator')

exports.listarPorId = [
    check('id')
        .exists().withMessage('ID em branco')
        .isInt().withMessage('O ID deve ser um numero inteiro')
]
    
exports.inserir = [
    check('descricao')
        .exists().trim().withMessage('Descrição em branco'),
    check('data')
        .exists().withMessage('Data em branco'),
    check('categoria_id')
        .exists().withMessage('Categoria em branco')
        .isInt().withMessage('A Categoria deve ser um numero inteiro'),
]

exports.alterar = [
    check('id')
        .exists().withMessage('ID em branco')
        .isInt().withMessage('O ID deve ser um numero inteiro'),
    check('descricao')
        .exists().trim().withMessage('Descrição em branco'),
    check('data')
        .exists().withMessage('Data em branco'),
    check('categoria_id')
        .exists().withMessage('Categoria em branco')
        .isInt().withMessage('A Categoria deve ser um numero inteiro')
]

exports.deletar = [
    check('id')
        .exists().withMessage('ID em branco')
        .isInt().withMessage('O ID deve ser um numero inteiro')
]