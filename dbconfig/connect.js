const mongo = require('mongoose');
const URL = 'mongodb://localhost/movie_db1'

mongo.connect(URL,{useNewUrlParser:true,useCreateIndex:true});
mongo.set('useFindAndModify', false); // added to avoid this error "useFindAndModify --Balu
//mongo.set('useCreateIndex', true);//added to avoid error "ensureIndex is deprecated --Balu
const db = mongo.connection;

db.once('open',() =>{
    console.log(`DB Connection successful  ${URL} `)
});
db.on('error', err =>{
    console.error(`DB Connection failed  ${URL}`)
});

module.exports = db;