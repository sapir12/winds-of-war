'use strict'
var express   = require('express');
var app       = express();
var mongoose  = require('mongoose');
var db        = mongoose.connection;
var Schema    = mongoose.Schema;
var	async	  = require('async');
var cors      = require('express-cors');
var bodyParser= require('body-parser');
var mainDB    = require('./server/database/main-database.js');
var fs        = require("fs");
var morgan    = require('morgan');

var publicDir = process.cwd() + '\\public';
console.log('Serving static files from:', publicDir);

app.use(cors({
    allowedOrigins: ['github.com', 'localhost']
}))
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded() ); // to support URL-encoded bodies
app.use( express.static(publicDir) );
app.use( morgan(':method :status :url :response-time') );

//////////////////////////////////// defining functions ///////////////////////////////////////
app.post('/authenticate', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	mainDB.authenticate(req.body.name ,req.body.password, function(err, reply){
		if (err) {throw err};
		if(reply == undefined){
			console.log("blocked attempt to access account", "\""+req.body.name+"\"", "for", req.protocol + '://' + req.get('host') + req.originalUrl);
			res.send("wrong name/password");
		}
		if (reply != undefined){
			if(reply.password == req.body.password){
				var importedFile = fs.readFileSync("public/view/cards-start.html", "utf8");
				importedFile += fs.readFileSync("public/view/home.html", "utf-8");
				/*var allCards = function(){
					var a = "";
					for (var i=0; i<reply.cards.length; i++){
						a += "\t\t<h3>"+reply.cards[i]+"</h3>\n";
					}
					return a;
				}
				importedFile += "\n\t\t<h1>CARDS</h1>\n" + allCards();*/
				importedFile += fs.readFileSync("public/view/cards-end.html", "utf8");
				console.log("access granted to access account", "\""+req.body.name+"\"", "for", req.protocol + '://' + req.get('host') + req.originalUrl);
				res.send(importedFile);
			}else{
				console.log("blocked attempt to access account", "\""+req.body.name+"\"", "for", req.protocol + '://' + req.get('host') + req.originalUrl);
				res.send("wrong name/password");
			};
		}
	});
});


//////////////////////////////////// calling functions ////////////////////////////////////////
//mainDB.saveInfo("arel", "r.l.sapir@gmail.com", "UwiSh!@12");


////////////////////////////////////     variables     ////////////////////////////////////////
app.param('searchString', function(req, res, next, searchString){
	req.searchString = searchString;
	next();
});
app.param('itemID', function(req, res, next, itemID){
	req.itemID = itemID;
	next();
});



app.listen(8008);
console.log('server listening on port 8008');