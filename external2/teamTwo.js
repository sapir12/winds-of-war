'use strict'

var cards    = require('./cards'),
	loadCard = require('./loadCard'),

	teamTwoList = ['ion', 'hound', 'hound', 'hound', 'ion'],
	teamTwo     = [],

	createTeam = function(arrayIn, arrayOut){
		for(var i=0; i<teamTwoList.length; i++){
			teamTwo.push(new loadCard(teamTwoList[i], 2))
		}
	};
	
createTeam();

module.exports = teamTwo;