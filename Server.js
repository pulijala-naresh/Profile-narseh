/*
Author Rajendra Shrikant
*/
var express = require('express');
var http = require('http');
var app = express();
app.use(express.static(__dirname + '/')); 
app.get('/',function(req, res){
	res.sendfile("index.html")
});
var server_app = http.createServer(app);
server_app.listen(process.env.PORT || 5000, function () {
  console.log('listening on http://localhost:5000'); //8080
});