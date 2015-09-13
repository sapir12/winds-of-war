'use strict'
var express    = require('express');
var app        = express();
var async      = require('async');
var bodyParser = require('body-parser');
var cors       = require('express-cors');
var mongoose   = require('mongoose');
//var db         = mongoose.connection;


app.use(cors({
    allowedOrigins: ['localhost:8000']
}));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded() );

mongoose.connect('mongodb://localhost:27017/windsOfWar');

var find = function(collec, query, callback) {
    mongoose.connection.db.collection(collec, function (err, collection) {
    collection.find(query).toArray(callback);
    });
}

app.get('/skills', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	find('skills', {}, function(err, data){
		console.log(data);
		res.send(data);
	});
});

app.get('/', function(req, res){	
	res.send('hello world');
});

var port = 3001;
app.listen(port);
console.log('server listening on port '+port.toString() );