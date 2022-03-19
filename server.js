const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.sendFile('./views/index.html',{root:__dirname})
})

app.get('/', (req,res)=> {
    res.sendFile('./views/search.html',{root:__dirname})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('Server runs');
})
