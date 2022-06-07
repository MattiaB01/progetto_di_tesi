const express= require('express');

const app= express();

const path=require ('path');
//const { traceDeprecation } = require('process');

const db= require('../database');

app.use(express.static('./public'));




app.post('/', function (req,res)
{   
  
  
  const {user,pw} = req.body;
  const contagi= req.body.contagi;
  

    db.query('SELECT * FROM medico WHERE user=? and pw=? ',[user,pw] ,function (err, result, fields)
    {
      if (err) throw err;
      
      if (result[0]==null)
      { 
        const mex="Corrispondenza non trovata!"
        res.render('index.ejs',{mex:mex,datiAggiornati:contagi});  
        /*
          res.send('<h3> Corrispondenza non trovata </h3> <br>' +
         "<a href='/'>HOME</a>");
         return;*/
          
      }
      else 
      {  
          let risult=db.query('SELECT * FROM paziente',function(err,result,fields)
         {  
            //console.log(result);
            
            res.render('principale.ejs',{risultati:result});
         });
         };

});
  
});
module.exports=app;
