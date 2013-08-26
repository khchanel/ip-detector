/*
 * GET homepage
 */

exports.index = function(req, res){
  res.render('index', { title: 'IP Detector', ip: req.ip });
};

