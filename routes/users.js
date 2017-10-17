var express = require('express');
var router = express.Router();
var crypto = require('crypto');
//conect database 
var db = require('database');
db.query("SELECT * FROM users", function (err, result, fields) {
   if (err) throw err;
   //console.log(result);
});
/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


module.exports = router;
