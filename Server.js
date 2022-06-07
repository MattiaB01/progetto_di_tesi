const influx=require('influx');

const express=require('express');

const https=require('https');

const app=express();

const port=4000;

const router = express.Router();

const path = require ('path');

const mysql = require ('mysql2');

const db=require('./database');

const db2=require('./iniziadb');

//const bodyParser= require("body-parser"); //deprecato
//app.use(bodyParser.urlencoded({extended:false})); // deprecato

app.use(express.urlencoded({extended:false}));

app.use(express.static("./public"));

let datiAggiornati="";



app.use('/crea',(req,res)=>
 {
     db2.crea();
     res.send('Creati databases necessari');
     
 });

app.use('/elimina', require ('./Routes/elimina'));

app.use('/accedi', require ('./Routes/accedi'));

app.use('/registraPaziente', require('./Routes/registraPaziente'));

app.use('/registraMedico', require('./Routes/registraMedico'));


app.get('/regMedico',(req,res)=>
{
    res.render('regmedico.ejs');
})

app.get('/accedi/regPaziente',(req,res)=>
{
    res.render('regpaziente.ejs');
})

app.post('/cancella',(req,res)=>
{   const paziente=req.body;
    const client = new influx.InfluxDB({
        database: 'ESP32_Sensore',
        host: 'localhost',
        port: 8086});
    client.dropMeasurement(paziente.btn1);
    res.send('Dati misurazioni '+[paziente.btn1]+' cancellati  '+'<a href="javascript:history.go(-1)" style="text-decoration:none">Indietro</a>');
    


})

app.use('/visualizza',require('./Routes/visualizza'));







app.get('/',(req,res)=>
{   let mex;
    datiCovid();
    res.render('index.ejs',{mex:mex,datiAggiornati:datiAggiornati});
});


//app.use('/registraPaziente',require ('./routes/registraPaziente'));

app.get('/regPaziente',(req,res)=>{
    const mex2='';
    res.render('regpaziente.ejs',{mex2:mex2});
});


function datiCovid()
{
        let url = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json";
        let req = https.get(url, function(res) {
        let data=" ";
        let json_data;
        //let csv_data;
        res.on('data', function(stream) {
          data += stream;
       
          });
        res.on('end', function() {
            json_data = JSON.parse(data);
           // console.log(json_data[0].nuovi_positivi);
            datiAggiornati = json_data[0].nuovi_positivi;
             });
        });
    };





app.listen(port,'',()=>{

    console.log(`Server inizializzato sulla porta ${port}` );
    datiCovid();
    
    

});

