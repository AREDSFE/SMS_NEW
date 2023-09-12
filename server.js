`use strict`;

const express = require('express')
const axios =require('axios')
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:uxz1qx08MaOVlERwwOS0@containers-us-west-88.railway.app:7560')







const { idmovies} = require('./module/idmovies')




const app = express();
app.use(cors());

const port = process.env.PORT || 3005




app.get('/:id' , idmovies);







app.get('*' , (req,res)=>{
    res.status(404).json({'error' : 'page not find'})
})

app.listen(port , () =>{
    console.log(`this is my port ${port}`)
})