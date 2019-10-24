var mongoose = require('mongoose');
require('dotenv').config(); 
var connect =mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true });

module.exports = connect;