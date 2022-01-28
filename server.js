const express = require('express');//this gives access to the express library
const app = express();// creating an instance of the constructor named app
app.listen(8000,function(){
    console.log("server is running");
})//listen for request

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
//sending a request get
app.get('/users/:id',function(req,res){
    //adding dynamic GET route
    console.log(req.params.id);
    res.json({
        success:true,
        message:'successfully got users. Nice!',
        users:req.params.id
    })
})