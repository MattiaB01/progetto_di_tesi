const express= require('express');
const app=express();
const db=require('../database');
app.post('/', function(req,res){
 
    const valore = req.body;

    //res.send(valore.btn1);

    db.query('delete from paziente where paziente=?',[valore.btn1],(err)=>
    {    if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            const risult=db.query('SELECT * FROM paziente',function(err,result,fields)
        
        {
           res.render('principale.ejs',{risultati:result});
        });
        }
    })

});

module.exports=app;