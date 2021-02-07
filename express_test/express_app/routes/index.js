var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name1 = req.query.name;
  let name2 = req.query.something;
    res.render('index', { 
    title: 'Express',
    name: name1,

  })

});

module.exports = router;
