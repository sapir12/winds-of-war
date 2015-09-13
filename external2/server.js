var http   = require("http"),
	test   = require('./test');

http.createServer(function(request,response){
    console.log('connection was made');  
    response.writeHeader(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": "http://localhost"});  
    response.end(test);
}).listen(60);
console.log("Server Running on port 60");