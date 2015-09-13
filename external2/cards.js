'use strict'
var t      = require('./types'),
	s      = require('./skills');

/* card basic for copy paste //
		name: 
		power: 
		health: 
		health_max: 
		defense: 
		honor: 
		fear:
		init: 
		speed: 
		types: {
			primary: t.
			secondary: t.
			specific: t.
		},
		skills: {
			primary: 
			secondary: 
		},
		team: null
*/

var cards = {
	ion: {
		name: 'Ion',
		power: 2,
		health: 5,
		health_max: 5,
		defense: 0,
		honor: 4,
		fear: 1,
		init: 3,
		speed: 0,
		types: {
			primary: t.inanimate,
			secondary: t.light,	
			specific: t.guardian,
		},
		skills: {
			primary: s.healingAura,
			secondary: null
		},
		team: null
	},

	hound: {
		name: 'Hound',
		power: 1,
		health: 5,
		health_max: 5,
		defense: 1,
		honor: 0,
		fear: 1,
		init: 3,
		speed: 3,
		types: {
			primary: t.living,
			secondary: t.earth,
			specific: t.dog
		},
		skills: {
			primary:  s.dogsPack,
			secondary: null
		},
		team: null
	},

	zeia: {
		name: 'Zeia',
		power: 1,
		health: 15,
		health_max: 15,
		defense: 3,
		honor: 2,
		fear: 2,
		init: 3,
		speed: 1,
		types: {
			primary: t.living,
			secondary: t.earth,
			specific: t.esla
		},
		skills: {
			primary: s.eslasShield,
			secondary: null
		},
		team: null
	}

}

module.exports = cards;