var express = require("express");
var express_handlebars = require("express-handlebars")
var path = require("path")



//Set up Server at Port: 5000
var app = express();
var port = 5000;
app.listen(port, function() {
    console.log("Server started on Port: 5000");
});

//Folders
app.use(express.static('CSS'));    //CSS Folder
app.use(express.static('Images'));    //Images Folder

//Handlebars
app.engine('handlebars', express_handlebars());
app.set('view engine', 'handlebars');

//--Get Requests
app.get('/', function (req, res) {
    res.render("index");
});
 
