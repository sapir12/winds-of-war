'use strict'

var teamOne = require('./teamOne'), //array of cards names
	teamTwo = require('./teamTwo'), //array of cards names
	field   = [];
var assemble = function(height, width){
	height += 1;
	width  += 1;
	for(var i=1; i<height; i++){
		field[i]=[];
		for(var k=1; k<width; k++){
			field[i][k] = {
				s     : i+','+k, // 's' for String
				point : {height: i, width: k},
				card  : null
			};
		}
	}
}
assemble(10,10);
field[1][1].card = teamOne[0];
field[1][2].card = teamOne[1];
field[1][3].card = teamOne[2];
field[1][4].card = teamOne[3];
field[1][5].card = teamOne[4];


console.log(field[1]);
