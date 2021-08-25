const db = require('../models/stu');

exports.findall = (req, res) => {
    console.log('in findall');
    db.find()
        .then(Fetcheddata => {
            console.log(Fetcheddata);
            //res.send(Fetcheddata);
            res.json(Fetcheddata);
        })
        .catch(err => {res.status(500).send({
                message: err.message || "Error while retrieving !"});
        });  
    };
exports.findOne = (req,res)=>{
    db.findById(req.params.stId)
    .then(info=>{
        if(!info) {
            return res.status(404).send({
                message: "1: Details not found with id " + req.params.stId
            });
        }
        res.send(info);
    }) 
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "2: Details not found with id " + req.params.stId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Details with id " + req.params.stId
        });
    })
}
exports.create =(req,res) =>{
    console.log('post')
    //res.send('aeiou')
    if(!req.body.Studentname) {
        return res.status(400).send({
            message: "Main Details cannot not be empty"
        });
    }
    const sendData = new db({
        Studentname : req.body.Studentname ,
        Class : req.body.Class,
        Year  : req.body.Year,
        Rating : req.body.Rating
    })
    sendData.save()
            .then(dd => {
             console.log('inserted')
            res.send(dd);
    })
    /*.catch(err =>{
        res.status(500).send({
            message : err.message || "Error while inserting !!"
        })
    })*/
}
exports.update = (req,res)=>{
    if(!req.body.Studentname){
        return res.status(400).send({
            message: "1: Main Details cannot be empty"
        });
    }
    db.findByIdAndUpdate(req.params.stId,
        {
            Studentname : req.body.Studentname,
            Class : req.body.Class,
            Year : req.body.Year,
            Rating : req.body.Rating
        },{new:true})
    .then(info =>{
        if(!info){
            return res.status(400).send({
                message : "2: Details cannot be empty"
            })
        }
        res.send(info);
    })
}
exports.delete1 = (req,res)=>{
    const tempId = req.params.stId
    db.findByIdAndRemove(req.params.stId)
    .then(info=>{
        console.log(info)
        if(!info){
            return res.status(400).send({
                message : "Details not found with given id" + res.params.stId
            })
        }
        console.log("delete 2")
        res.send({message:"Details deleted for id " + tempId})
    })
    .catch(err =>{res.status(404).send({message : err })
    })
}
