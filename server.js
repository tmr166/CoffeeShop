const express = require("express");
const express_handlebars = require("express-handlebars")
const path = require("path")

//jquery


//Set up Server at Port: 5000
const app = express();
const port = 5000;
app.listen(port, function() {
    console.log("Server started on Port: 5000");
});

//Folders
app.use(express.static('CSS'));    //CSS Folder
app.use(express.static('Images'));    //Images Folder
app.use(express.static('node_modules/jquery/dist'));    //jquery Folder

//Handlebars
app.engine('handlebars', express_handlebars());
app.set('view engine', 'handlebars');

//--Get Requests
app.get('/', function (req, res) {
    res.render("index");
});

app.get('/menu', function (req, res) {
    const posts = require(`${__dirname}/JSON/theme.json`)
    res.render("menu",posts);
});
 
app.get('/about', function (req, res) {
    res.render("about");
});
