'use strict'

var cards = require('./cards');

var loadCard = function(card, teamNumber){
	this.name       = cards[card].name;
	this.power      = cards[card].power;
	this.health     = cards[card].health;
	this.health_max = cards[card].health_max;
	this.defense    = cards[card].defense;
	this.honor      = cards[card].honor;
	this.fear       = cards[card].fear;
	this.init       = cards[card].init;
	this.speed      = cards[card].speed;
	this.types      = {
		primary: cards[card].types.primary,
		secondary: cards[card].types.secondary,
		specific: cards[card].types.specific
	},
	this.skills = {
		primary: cards[card].skills.primary,
		secondary: cards[card].skills.secondary
	},
	this.team = teamNumber;
}

module.exports = loadCard;
