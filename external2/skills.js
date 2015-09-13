'use strict'
var JSONfn = require("./json-fn");

var s = { // 's' for Strings
	allys: 'effects only allys',
	enemys: 'effects only enemys',
	all: 'effects all units',
	self: 'effects only self',
	stack: 'does stack',
	noStack: 'does not stack',
	pas: 'passive',
	act: 'active'
}

var skills = {
	dogsPack: {
		name: 'Dogs Pack',
		type: s.pas,
		description: {
			basic: "increases every dog type unit's attack and defense by 1",
			effects: s.allys,
			extra: s.stack
		},
		invoke: function(OBJECT_or_ARRAY){ 
			//needs to be done:
			//checking each unit in an array: (array of units in the in-game fields)
			//checks if current unit's types.specific key object has the value 'dog' in it and if true
			//increases attack and defense of that unit by one.
		}
	},

	healingAura: {
		name: 'Healing Aura',
		types: s.pas,
		description: {
			basic: "increases every unit's health by 1 each turn",
			effects: s.allys,
			extra: s.noStack +" does not exceed max health"
		},
		invoke: function(OBJECT_or_ARRAY){
			//TO DO
		}
	},

	eslasShield: {
		name: 'Esla\'s Shield',
		types: s.pas,
		description: {
			basic: "increases defense by one for every hit absorbed",
			effects: s.self,
			extra: s.stack
		},
		invoke: function(){
			$scope.view.defense += 1
		}
	}

}

var skillsFinal = JSONfn.stringify(skills);
module.exports  = skillsFinal;