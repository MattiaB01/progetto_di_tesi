const express=require('express');

const app=express();

const db=require('../database');

const Swal = require('sweetalert2')


app.post('/', function(req,res){

    const {paziente,nome,cognome,cf,indirizzo,citta,tel,malattie,altro} = req.body;

    if(!cf)
        {
            res.status(400).send('Codice fiscale obbligatorio  <a href="/regPaziente"> Riprova </a> <style> a{text-decoration:none}');
            return;
        };

    db.query('INSERT INTO paziente (nome,cognome,cf,indirizzo,citta,telefono,malattie,altro,paziente) VALUES (?,?,?,?,?,?,?,?,?)',[nome,cognome,cf,indirizzo,citta,tel,malattie,altro,paziente],function(err)
    {
        if(err)
        {   console.log(err);
            res.send('si è verificato un errore , codice fiscale o id paziente già presente '+
            ' <a href="/regPaziente"> Riprova </a> <style> a{text-decoration:none} </style>');
            return;
        }

        else
        {  const risult=db.query('SELECT * FROM paziente',function(err,result,fields)
        
        {
           res.render('principale.ejs',{risultati:result});
        });
    }

    });
    //res.send('aa');
});


module.exports= app;