'use strict'

var http = require('http'),
	faye = require('faye');

var server = http.createServer(),
	bayeux = new faye.NodeAdapter({mount: '/'});

bayeux.attach(server);
server.listen(8001);
console.log('server listening on port 8001');