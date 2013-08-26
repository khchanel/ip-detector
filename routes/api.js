/*
 * REST API
 */

exports.index = function(req, res) {
  res.redirect(301, '/api/ip');
};

exports.ip = function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(req.ip);
};

