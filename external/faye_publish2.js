'use strict'
var	Faye   = require('faye'),
	client = new Faye.Client('http://localhost:8001/');

var fullMessage = '';
for(var i=2; process.argv[i]!=undefined && process.argv[i]!=null; i++){
	fullMessage += process.argv[i]+' '
}

var pub = client.publish('/messages', {
	text: fullMessage
});

pub.callback(process.exit);