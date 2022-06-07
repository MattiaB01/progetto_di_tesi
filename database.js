
const mysql=require('mysql2');

const db=mysql.createConnection(
    {
      host:'localhost',
      user: 'root',
      password:'windwind',
      database: 'esp32_sensori'
    }
    
    );

    module.exports=db;