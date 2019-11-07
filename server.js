var express = require('express');
var app = express();
//var mongoose = require('mongoose');
//require('dotenv').config(); 
//mongoose.connect(process.env.mongoURI,{useUnifiedTopology: true, useNewUrlParser: true });
//const db = mongoose.connection;
//db.on('error', (error) => console.error(error))
//db.once('open', () => console.log('connected to database'))
app.use(express.json());
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter)
app.listen(5000, () => console.log('server started'+"5000"));
