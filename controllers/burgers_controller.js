var express    = require('express'); 
var app         = express(); 
var port = process.env.PORT || 8080;        // set our port
var something  = require("../models/burger.js");

var appRouter  = express.Router(); 

app.listen(port);
console.log('Yo port ' + port);

exports.router = appRouter;