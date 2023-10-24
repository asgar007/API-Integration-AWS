const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios')
const db = require('./config/mongoose');
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

// use express router
app.use('/api', require('./routes'));

const PORT = process.env.PORT || 6000;
app.listen(PORT, (err)=>{
    if(err){ console.log("error listening server"); return;}
    console.log('Server is listening at ', PORT);
    return;
})