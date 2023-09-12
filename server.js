`use strict`;

const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:uxz1qx08MaOVlERwwOS0@containers-us-west-88.railway.app:7560')






const app = express();
app.use(cors());

const port = process.env.PORT || 3005



app.get('/:number', (req, res) => {

    const accountSid = 'AC1c2e11b28425b0e32793c1e73bc08595';
    const authToken = '0d7fe7990eee5f2c4ca2fb772919e836';
    const client = require('twilio')(accountSid, authToken);
    // Use the REST client to send a text message

    const number = '+' + req.params.number
    console.log(number)

    client.messages.create({
        body: 'تم قبول المعاملة الرجاء المراجعه برقم هاتفك المسجل ',
        from: '+12512704131',
        to: number
    }).then(function (message) {
        // When we get a response from Twilio, respond to the HTTP POST request
        res.send('Message is inbound!');
    });
});


app.get('*', (req, res) => {
    res.status(404).json({ 'error': ' not find' })
})


app.listen(port, () => {
    console.log(`this is my port ${port}`)
})