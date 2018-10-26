var http = require('http');

const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
require('dotenv').config();
app.get('/', (req, res) => {
    res.send(process.env.SECRET_KEY);
})

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('First Assignment of node js');
}).listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});

