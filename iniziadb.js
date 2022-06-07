const db2=require ('./database');

var crea=function (){
    db2.query('CREATE DATABASE IF NOT EXISTS esp32_sensori');
    db2.query('CREATE TABLE IF NOT EXISTS `esp32_sensori`.`medico` (`user` VARCHAR(45) NOT NULL, `pw` VARCHAR(45) NOT NULL UNIQUE,`nome` VARCHAR(45) NULL, `cognome` VARCHAR(45) NULL,`cf` VARCHAR(45) NOT NULL, `altro` VARCHAR(45) NULL,PRIMARY KEY (`cf`)); ');
    db2.query("CREATE TABLE IF NOT EXISTS `esp32_sensori`.`paziente` (`nome` VARCHAR(20) NULL,"+
        "`cognome` VARCHAR(45) NULL,"+
       " `cf` VARCHAR(45) NOT NULL, "+
       "  `indirizzo` VARCHAR(45) NULL,"+
       "  `citta` VARCHAR(45) NULL, "+
       " `telefono` VARCHAR(45) NULL,"+
       " `malattie` VARCHAR(150) NULL,"+
       " `altro` VARCHAR(45) NULL,"+
       " `paziente` VARCHAR(45) NULL,"+
       " UNIQUE(paziente),"+
       " PRIMARY KEY (`cf`));");
    
    
    
    console.log('fatto');
};





exports.crea=crea;