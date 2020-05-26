// const mysql = require('mysql');
// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'mcpeblocker',
//     password: 'minecraft11004',
//     database: 'users'
// });
// con.query('SELECT * FROM users', (err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });
const fs = require('fs');
const express = require('express');
const app = express();
app.get('/vat',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('./index.html',(err,data)=>{
        if(err) throw err;
        res.write(data);
    });
});
app.listen(1234);
console.log('Listening....')