var express= require('express');
var app = express();
var todoController= require('./controllers/todoController.js');

//setting up template engine
app.set('view engine', 'ejs');

//route for static files
app.use(express.static('./public'));

todoController(app);

//Start the server
app.listen(3000);
