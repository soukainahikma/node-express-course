const express = require('express');//this gives access to the express library
const app = express();// creating an instance of the constructor named app

// include "body-parser" library from node_modules (included with express)
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
//building a get request
app.get('/users/:id',function(req,res){
    //adding dynamic GET route
    //You can use dynamic variables to search for specific data associated with an id in your database, and return that (instead of just returning the id).
    console.log(req.params.id);
    res.json({
        success:true,
        message:'successfully got users. Nice!',
        users:req.params.id
    })
})


// building a post request
app.post('/login',function(req,res)
{
    const username=req.body.username;
    const password= req.body.password;

    const mockUsername='billyTheKid';
    const mockPassword='supperSecret';

    if(username === mockUsername && password===mockPassword)
    {
        res.json({
            success:true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    }
    else{
        res.json({
            success:false,
            message: 'password and username do not match'
        })
    }
})
app.listen(8000,function(){
    console.log("server is running");
})//listen for request