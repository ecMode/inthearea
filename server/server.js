var http = require('http'),
	io = require('socket.io'),
	express = require('express'),
	request = require('request'),
	app = express(),
    server = http.createServer(app); // better instead

app.configure(function(){
  	app.set('port', process.env.PORT || 3000);
	app.use(express.static(__dirname + '/../public'));
	app.use(app.router);
});

server.listen(process.env.PORT || 4000);

//Start a Socket.IO listen
var io = io.listen(server);
 
//If the client just connected, give them fresh data!
io.sockets.on('connection', function(socket) { 

});