var express = require('express');
var app = express();
var mongoose = require('mongoose');
//require('dotenv').config(); 
mongoose.connect("mongodb+srv://udaya2208:Udaya@@2208@cluster0-8unsn.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json());
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter)
app.listen(3000, () => console.log('server started'));
