var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false}); 

var data = [{task:'get'},{task:'cook food'},{task:'code till death'}];

module.exports = function(app) {

    app.get(('/todo'), function(req, res){
        res.render('todo', {todos: data});

    });
    app.get(('/'), function(req, res){
        res.render('todo', {todos: data});

    });
    app.post(('/todo'),urlencodedParser, function(req, res){
        data.push(req.body);
        console.log(req.body);
        res.json(data);

    });

    app.delete(('/todo/:item'), function(req, res){
        data= data.filter(function(todo){
            return todo.task.replace(/ /g, '-') !== req.params.item
        });
        res.json({todos:data});    

    });
}