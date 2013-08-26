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


/* Start server */
app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
console.log('env: ' + app.get('env'));

