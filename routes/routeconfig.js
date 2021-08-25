module.exports = (app) =>
{
    const stuDetails = require('../controllers/studentcontroller');
    const staffDetails = require('../controllers/staffcontroller')

    app.get('/students',stuDetails.findall);
    app.get('/students/:stId',stuDetails.findOne)
    app.post('/students',stuDetails.create);
    app.put('/students/:stId',stuDetails.update)
    app.delete('/students/:stId',stuDetails.delete1)


    app.post('/staff',staffDetails.create);
}