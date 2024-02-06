const express = require('express');
const app = express();
const mongoose = require('mongoose');

let url = 'mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/shorturl';
const Routers = require('./routes/url');

mongoose.connect(url).then(() => { console.log('connected to DB'); });


const URL = require('./model/url');

app.use(express.json());

app.use('/urls', Routers);

app.listen(4011, () => { console.log('Server is listening on port 4011'); });
