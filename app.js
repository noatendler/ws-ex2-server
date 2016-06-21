var express = require('express');
var app = express();
var stud = require('./grades');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:db_pass@ds041404.mlab.com:41404/stusentinfo');
var port = process.env.PORT || 3000;
//open connection to mongoDB
mongoose.connection.once('open', function(){
    app.use('/', express.static('./public'));
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    app.set('json spaces', 4);
    res.set("Content-Type", "application/json");
      next();
    });
    app.get('/showall',stud.getAll);
    app.get('/getbyid/:id',stud.getstud);
    app.get('/getbest/:year',stud.getbeststud);
    
});
app.listen(port);

