/**
 * This node js web app echo the IP address of the client
 * Author: Nelson Chan <khchanel@gmail.com>
 * Date: 26 Aug 2013
 */

var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

/* Uses */
app.use(express.logger());

/* Routes */
app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(req.ip);
});


/* bind port to listen on */
app.listen(PORT);
console.log("Listening on port: " + PORT);

