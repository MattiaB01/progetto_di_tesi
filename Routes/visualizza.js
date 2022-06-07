const express= require('express');

const app= express();

const path=require ('path');

const db= require('../database');

const bodyParser= require("body-parser");

app.use(express.static('./public'));



app.post('/',function(req,res){

const scelta= req.body;
console.log(scelta.scelta);

switch (scelta.scelta) {

    case undefined:
      let risultati="";
      res.render('principale.ejs',{risultati:risultati})
      break;

    case "Paziente1":
      
      res.render('paziente1.ejs');
      break;

    case "Paziente2":
     
      res.render('paziente2.ejs');
      break;

    case "Paziente3":     
      res.render('paziente3.ejs');
    
      break;

    case "Paziente4":     
      res.render('paziente4.ejs');
      break;

    case "Paziente5":     
      res.render('paziente5.ejs');
      break;
}

});
module.exports=app;