const express=require('express');

const app=express();

app.post('/', (req,res)=>{
    res.send('aaa');
});


module.exports= app;