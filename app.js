/**
 * This node js web app echo the IP address of the client
 * Author: Nelson Chan <khchanel@gmail.com>
 * Date: 26 Aug 2013
 */

var express = require('express');
var app = express();

/* Settings */
app.enable('trust proxy');
app.set('port', process.env.PORT || 8080);

/* Uses */
app.use(express.logger());

/* Routes */
app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(req.ip);
});

app.get('*', function(req, res) {
  res.send(404, 'I don\'t know what is ' + req.path);
});
app.all('*', function(req, res) {
  res.send('I don\'t know what to do :-S');
});


/* Start server */
app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
console.log('env: ' + app.get('env'));

