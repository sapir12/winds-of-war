'use strict'
var fs = require('fs');

var makeCard = function(name, power, etc){
	fs.appendFile('cards.js', "\n"+"var "+name+" = {name: '"+name+"', power: "+power+"};", function (err) {
		if(err){
			console.log(err);
		}
		else{
			console.log("succes: "+name+" = {name: '"+name+"', power: "+power+"};");
		}
	});
}

makeCard('Sieaou', 5);