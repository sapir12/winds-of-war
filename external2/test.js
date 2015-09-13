'use strict'

var teamTwo = require('./teamTwo'),
	teamOne = require('./teamOne'),
	cards   = {teamOne: teamOne, teamTwo: teamTwo};

//console.log(teamOne[0]);
//console.log('');
//console.log(teamTwo[0]);

var parsed = JSON.stringify(cards);

module.exports = parsed;