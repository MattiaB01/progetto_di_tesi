const express = require ('express');

const app = express();


app.post('/registraPaziente',function(req,res)
{
    res.send('BBB');
})
;
module.exports=app;