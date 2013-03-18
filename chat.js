var connect = require('connect');
var http = require('http');
var chat = require('chat');


var app = connect(connect.static(__dirname + '/public'));

var server = http.createServer(app);
var conectouChat = chat(server);
console.log("Conseguiu conectar? " +conectouChat);


server.listen(8001);
