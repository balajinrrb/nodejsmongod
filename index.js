//File Name index.js

//import express
let express = require('express')

//import Body Parser
let bodyParser = require('body-parser');

//import Mongooose
let mongoose = require('mongoose');

//Initialize the app
let app = express();

//import routes
let apiRoutes = require("./api-routes")


//configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

//connect to mongoose and set connection variable
mongoose.connect('mongodb://localhost/nodejsmongod');

var db = mongoose.connection;

//setup server port
var port = process.env.PORT || 8080;

//send message for default URL
app.get('/', (req,res) => res.send('Helloe World with Express'));

//use api routes in the app
app.use('/api', apiRoutes)

//launch app to listen to specified port
app.listen(port, function () {
	console.log("Running Rest HUB on port " + port);
});

