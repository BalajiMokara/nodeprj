const db = require('../models/crew');

exports.create = (req,res) =>{
    console.log(req.body)
    if(!req.body.CrewName) {
        return res.status(400).send({
            message: "Main Details cannot not be empty"
        });
    }
    const sendCrewData = new db({
        CrewName : req.body.CrewName ,
        CrewId : req.body.CrewId,
        City  : req.body.City,
        Age : req.body.Age,
        DOB : req.body.DOB
    })
    sendCrewData.save()
            .then(dat => {
             console.log('data inserted')
            res.send(dat);
    })
    .catch(err => {
        console.log('error!!')
    })
   
}

