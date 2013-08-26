/**
 * This node js web app echo the IP address of the client
 * Author: Nelson Chan <khchanel@gmail.com>
 * Date: 26 Aug 2013
 */

/* Requires */
var express = require('express');
var path = require('path');
var routes = require('./routes');
var api = require('./routes/api');

/* Intialization */
var app = express();

/* Settings */
app.enable('trust proxy');    // comment out this line if not running behind reverse proxy
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/* Uses */
app.use(express.favicon());
app.use(express.logger());
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(app.router);

/* Web routes */
app.get('/', routes.index);

/* API routes */
app.get('/api/ip', api.ip);
app.get('/api', api.index);

/* Misc routes */
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

