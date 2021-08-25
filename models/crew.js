const mongoose = require('mongoose');
const CrewSchema = mongoose.Schema;

const CrSchema = new CrewSchema(
    {
        CrewName : {type: String},//, required:'Name Filed is required'},
        CrewId : {type :Number},
        City : {type : String},
        Age :{type :Number},
        DOB :{type:Date}
    }
);
//StudentsSchema.path(Age).validate(
//    (val) =>{ val > 100 ;
//        return val;
//},'invalid');
const Crew = mongoose.model('CrewSchema',CrSchema);
module.exports = Crew;