const {logEvents} = require('./utility/logger.js');
const http = require('http');
const express = require('express');

const app = express();

// host some file

// serve some requests
// create our own server



app.get('/', (req,res)=> {
    res.send("Hello World");
})

// i will work for abcd and acd
app.get('/a(bc)?d', (req,res)=> {

    res.send("Hello World");
    // changes that might resolve the bug
})

app.get('*', (req,res)=> {
    res.send("404 not found");
})



app.listen("3001", () => {
    console.log("Listening to this port : 3001");
})

