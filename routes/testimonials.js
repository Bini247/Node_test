var express = require('express');
var router = express.Router();
var testimonialService = require('../services/testimonialsService');

router.get('/', function(req, res, next) {
    var testimonials = testimonialService.getTestimonials();

    var viewData = {
        title: 'Depoimentos',
        testimonials: testimonials
    }
    res.render('testimonials', viewData);
});

module.exports = router;