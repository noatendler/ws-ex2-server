var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Stud = require('./studentSchema');
exports.getAll = function(req, res){
         Stud.find({}, function(err, students){//return all JASON
            if(err) throw err;
            res.json(students);
         });
    }
exports.getstud=function(req, res){
         var temp = parseInt(req.params.id); //convert to Number
         Stud.find({idStudent:temp}, function(err, students){ //get student data bt ID
            if(err) throw err;
            res.json(students);
         });
     }

exports.getbeststud = function(req, res){
    var temp = parseInt(req.params.year); //convert to Number
        Stud.find({}).where('year').in(temp).where('grade').gt(89).exec(function(err,students){ //get data of student that got 90 and over of a specific year
            if (err) throw err;
            res.json(students);
        });
}

