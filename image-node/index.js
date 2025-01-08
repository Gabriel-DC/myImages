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
    const conn = mysql.createConnection(config);
    conn.query("SELECT * FROM people", function (err, result, fields) {
        if (err)
            res.send(`<h1>Node with Express using Docker Container</h1>
            ${result.toString()}`);

        res.send('<h1>Node with Express using Docker Container</h1>');
      });
});

app.listen(port, () => console.log('Server is running 3000'));