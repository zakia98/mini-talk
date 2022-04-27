var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
  res.render('newForm', {title: 'Send a message'});
});

module.exports = router;
