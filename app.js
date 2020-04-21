const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.set("view-engine", "ejs");

app.get("/", function (req, res) {
	res.render("index.ejs");
});

app.get("/testing", function (req, res) {
	res.render("testing.ejs");
});

module.exports = app;
