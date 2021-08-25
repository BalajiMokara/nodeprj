const mongoose = require('mongoose')
const schema = mongoose.Schema;
const AutoIncrement = require('mongoose-auto-increment')
//const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

var  StudentSchema = new schema({
    Studentname : {type:String},
    Class : {type:String},
    Year : {type:Number},
    Rating :{type:Number}
    });
AutoIncrement.initialize(mongoose.connection);
StudentSchema.plugin(AutoIncrement.plugin,{
    model:"MovieReg",
    field:"_id", //"Rating,"
    startAt : 1001,
    incrementBy : 1,
})
//mongoose.model('MovieReg',Movieschema);    
const MovieReg = mongoose.model('MovieReg',StudentSchema);
module.exports = MovieReg;

