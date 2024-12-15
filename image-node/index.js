const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Node with Express using Docker Container');
});

app.listen(port, () => console.log('Server is running 3000'));