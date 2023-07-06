const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req,res)=>{
    //res.json({message: 'success'});
    res.send("API is running");
});

app.listen ()

