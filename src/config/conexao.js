const mysql = require('mysql')//crio uma conecção com o banco

const conexao = mysql.createConnection({//passo as informações para a conexão
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

module.exports = conexao