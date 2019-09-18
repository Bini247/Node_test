var express = require('express');
var router = express.Router();
var postsVagas = require('../services/vagas');

//Home
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Associação Hunter'});
});

//Vagas
router.get('/trabalheConosco', function(req, res, next) {
  var vagas = postsVagas.getPosts();

  res.render('trabalheConosco', { title: 'Trabalhe Conosco', vagas: vagas });
});

module.exports = router;
