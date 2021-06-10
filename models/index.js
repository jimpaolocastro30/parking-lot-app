var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/parking', { useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.once('open', function(){
    console.log('Success, Mongo is Up');
});

db.on('error', function(){
    console.log('Ops, something went wrong');
});

return db;
