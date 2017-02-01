var express = require('express');
var router = express.Router();
var auth = require('../configs/authentication/middlewares/authenticate');

/* GET home page. */
router.get('/', auth.ensureAuthentication, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
