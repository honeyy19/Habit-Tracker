const express = require('express');
const app = express();
const port = 8000;

const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
app.use(express.urlencoded()) 
app.use('/',require('./routes'))
app.use(express.static('./assets')) // for getting static
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
app.set('view engine','ejs');
app.set('views','./views')
const db = require('./config/mongoose')

app.listen(port,function(err){
    if(err){
        console.log(`Error starting server on port: ${port}`)
        return;
    }
    console.log(`Server is running on port: ${port}`)
})