const express = require('express');//this gives access to the express library
const app = express();// creating an instance of the constructor named app
app.listen(8000,function(){
    console.log("server is running");
})

