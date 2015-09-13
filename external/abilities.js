'use strict'
var Player  = require('./players.js').Player;

var abilities = {
	passive : {
		dropOfLife: {
			description: "increases the life points of this unit by" /* a certain amount, TODO: +"amount" */,
			cast: function(card, magnitude){
				card.life += magnitude;
			}
		}
		wellOfLife: {
			description: "increases the life points of all units in your team by" /* a certain amount, TODO: +"amount" */,
			cast: function(teamCardsArray, magnitude){
				teamCardsArray.forEach(function(card){
					card.life += magnitude;
				});
			}
		}
	}
	active: {

	}
}