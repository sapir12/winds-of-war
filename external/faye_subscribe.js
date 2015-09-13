'use strict'
var Faye   = require('faye'),
	client = new Faye.Client('http://localhost:8001/');

client.subscribe('/messages', function(message){
	console.log('got a message: '+message.text);
});