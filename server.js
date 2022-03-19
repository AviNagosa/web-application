const express = require('express');
const { Result } = require('express-validator');
const mysql = require('mysql');
const { reset } = require('nodemon');

//Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodemydb"
});

//Connect
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const app = express();

//Create db
app.get('/createdb', (req,res)=> {
    let sql = 'CREATE DATABASE nodemydb';
    db.query(sql, (err, result)=> {
        if(err) throw err;
        console.log("Result: " + result);
        res.send('database created...');
    });
});

//Create table
app.get('/createtable', (req,res)=> {
    let sql = 'CREATE TABLE Item(ItemName varchar(255), Cost int)';
    db.query(sql, (err, result)=> {
        if(err) throw err;
        console.log("Result: " + result);
        res.send('Item table created...');
    });
});


app.get('/', (req,res)=> {
    res.sendFile('./views/index.html',{root:__dirname})
})

app.get('/', (req,res)=> {
    res.sendFile('./views/search.html',{root:__dirname})
})

//const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.listen(PORT,()=>{
    console.log('Server runs');
})
