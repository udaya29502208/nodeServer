var mongoose = require('mongoose');
//require('dotenv').config(); 
var connect =mongoose.connect("mongodb://localhost/subscribers",{ useNewUrlParser: true });

module.exports = connect;