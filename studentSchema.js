var mongoose = require('mongoose');
var schema = mongoose.Schema;


var studSchema = new schema({
    idStudent  : {type:Number, required:true},
    name : {type:String, required:true},
    grade : Number,
    course : {type:String},
    year : {type:Number, required:true}
},{collection: 'details'});


var Stud = mongoose.model('Stud', studSchema);
module.exports = Stud;