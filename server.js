var http = require('http');
var routes = require('./routes');
var fs   = require('fs');

function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  if(routes[req.url] === undefined) {
    res.write("<h1>Hello, World!</h1>");
    res.write("<h2>I can change the response!</h2>");
    res.end();
    }else{
      routes[req.url](req, res);
}
};

var server = http.createServer(handleRequest);

server.listen(8000, function() {
	console.log("I'm listening on port 8000...")
});
