var http = require("http"),
	test = require('./test');

http.createServer(function(request,response){ 
    console.log('connection was made');  
    response.writeHeader(200, {"Content-Type": "text/json"});  
    response.end(test);
}).listen(8080);
console.log("Server Running on port 8080");