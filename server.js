const express = require('express')
const bodyparser = require('body-parser')
const port = 8055
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
require('./dbconfig/connect')

app.get('/',(req,res)=>{
    //res.send('on get')
    res.json({"Message":"It's API"});
});
require('./routes/routeconfig')(app);

app.listen(port,()=>{
    console.log(`Server Running !!! on port ${port}`);
});




//npm install express body-parser mongoose --save
//npm install mongoose-auto-increment