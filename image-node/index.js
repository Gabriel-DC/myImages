const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql2');

const connection = mysql.createConnection(config);

const sql = 'INSERT INTO people(name) VALUES ("Gabriel Almeida")';
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    res.send('<h1>Node with Express using Docker Container');
});

app.listen(port, () => console.log('Server is running 3000'));