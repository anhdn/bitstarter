var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var buffer =  new buffer(256);
	response.send(buffer.toString(fs.readFileSync('index.html'))); 
	//response.send(buffer.toString("utf-8", fs.readFileSync("index.html","utf-8")));
	//response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});