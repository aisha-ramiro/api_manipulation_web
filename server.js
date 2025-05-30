const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();

const server = express();
const port = 3000;

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
}

server.use(express.json())

server.get('/cidades', async (req, res) => {
    let conexao;
    try
    {
        conexao = await mysql.createConnection(dbConfig);
        const [rows, fields] = await conexao.execute('SELECT * FROM CIDADE');

        res.json({
            mensagem: 'Cidades recuperadas com sucesso!',
            data: rows
        })
    }
    catch (error)
    {
        console.error('Erro ao buscar as cidades: ', error);
    } 
});

server.get('/empresas', async (req, res) => {
    let conexao;
    try
    {
        conexao = await mysql.createConnection(dbConfig);
        const [rows, fields] = await conexao.execute('SELECT * FROM EMPRESA');

        res.json({
            mensagem: 'Empresas recuperadas com sucesso!',
            data: rows
        })
    }
    catch (error)
    {
        console.error('Erro ao buscar as empresas: ', error);
    } 
});

server.listen(port, ()=>{
    console.log('Servidor rodando em http://localhost:3000/cidades');
    console.log('Servidor rodando em http://localhost:3000/empresas');
})
