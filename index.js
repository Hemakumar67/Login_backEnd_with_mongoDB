var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
require('./db')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const userSchema = require('./userModal');

app.use('/login',async (req,res)=>{
    const {user:username,pass:password} =  req.body;
    console.log('object :>> ', req.body);
    console.log('object :>> ', username,password);
    const users = new userSchema({username,password});
    const userDetail = await users.save();
    res.send({status:200,message:'success',userDetail});

})


app.listen('8000',(req,res)=>{
    console.log('Server port 8000');
})