'use strict'

var Player = function (playerNumber, functionsObject, array){
	for (var i=0 ; i<Object.keys(functionsObject).length ; i++) {
		this[Object.keys(functionsObject)[i]] = functionsObject[Object.keys(functionsObject)[i]];
	};
	this.number = playerNumber;
	if (array) {
		array.push(this);
	};
}

module.exports = {
	Player : Player
}