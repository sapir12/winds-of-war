'use strict'

var cards    = require('./cards'),
	loadCard = require('./loadCard'),

	teamOneList = ['hound', 'hound', 'zeia', 'hound', 'ion'],
	teamOne     = [],

	createTeam = function(arrayIn, arrayOut){
		for(var i=0; i<teamOneList.length; i++){
			teamOne.push(new loadCard(teamOneList[i], 1))
		}
	};
	
createTeam();

module.exports = teamOne;