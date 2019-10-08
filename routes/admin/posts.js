var express = require('express');
var router = express.Router();
var testimonialService = require('../../services/testimonialsService');

router.get('/', function(req, res, next) {
    var testimonials = testimonialService.getTestimonials();

    var viewData = {
        title: 'Depoimentos',
        testimonials: testimonials
    }
    res.render('admin/posts/index', viewData);
});

router.get('/create', function(req, res, next) {
    
    res.render('admin/posts/create');
});

module.exports = router;