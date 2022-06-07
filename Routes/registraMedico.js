const express=require('express');

const app=express();

const db=require('../database');

app.post('/', function(req,res){

    const {user,pw,nome,cognome,cf,altro} = req.body;

    if  ((!cf) || (!user) || (!pw))
        {
            res.status(400).send('Codice fiscale, username, password obbligatori  <a href="/regMedico"> Riprova </a> <style> a{text-decoration:none}');
            return;
        };

    db.query('INSERT INTO medico (user,pw,nome,cognome,cf,altro) VALUES (?,?,?,?,?,?)',[user,pw,nome,cognome,cf,altro],function(err)
    {
        if(err)
        {   console.log(err);
            res.send('si è verificato un errore , username o codice fiscale già presente '+
            ' <a href="/regMedico"> Riprova </a> <style> a{text-decoration:none}');
            return;
        }

        else
        {
            res.send('fatto <a href="/"> Torna al login </a> <style> a{text-decoration:none}');
        }
        
    });
    //res.send('aa');
});


module.exports= app;