const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/testing/', function (req, res) {
    res.sendFile(__dirname + '/views/testing.html');
});

app.listen(port, () => console.log(`App running at http://${host}:${port}`));