const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require("serve-favicon");

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon("./public/images/favicon.ico"));

app.set("view-engine", "ejs");

app.get("/", function (req, res) {
	res.render("index.ejs");
});

app.get("/contact", function (req, res) {
	res.render("contact.ejs");
});

app.get("/testads", function (req, res) {
	res.render("testads.ejs");
});

// Build list of skills & proficiency to populate the table in About Page
let languages = ["C#", "C++", "Java", "Python", "Dart", "Javascript", "HTML", "CSS", "SCSS"];
let languagesStars = [4, 3, 3, 4, 4, 4, 5, 4, 3];
let frontDev = ["Flutter", "React"];
let frontDevStars = [4, 3];
let gameEngines = ["Unity", "Godot"];
let gameEnginesStars = [3, 2];
let webServices = [".NET Core", "Web API", "NodeJS", "ExpressJS"];
let webServicesStars = [3, 3, 4, 4];
let cloudServices = ["AWS", "DigitalOcean"];
let cloudServicesStars = [3, 4];
let databases = ["PostgreSQL", "MySQL", "NoSQL"];
let databasesStars = [4, 3, 4];
let environments = ["Windows", "Linux"];
let environmentsStars = [4, 3];
let other = ["SEO", "CI"];
let otherStars = [3, 3];

let skills = [languages, frontDev, gameEngines, webServices, cloudServices, databases, environments, other];
let stars = [languagesStars, frontDevStars, gameEnginesStars, webServicesStars, cloudServicesStars, databasesStars, environmentsStars, otherStars];
let categories = ["Programming Languages", "Front End Development", "Game Engines", "Web Services", "Cloud Services", "Databases", "Environments", "Other"];

let tableContent = { skills, stars, categories };

app.get("/about", function (req, res) {
	res.render("about.ejs", { tableContent: tableContent });
});

module.exports = app;
