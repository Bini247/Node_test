var express = require('express');
var router = express.Router();
var testimonialService = require('../../services/testimonialsService');

router.get('/', function(req, res, next) {
    var testimonials = testimonialService.getTestimonials();

    var viewData = {
        title: 'Depoimentos',
        testimonials: testimonials
    }
    res.render('admin/testimonials/index', viewData);
});

router.get('/create', function(req, res, next) {
    
    res.render('admin/testimonials/create');
});

router.post('/create', function(req, res, next) {
    var testimonials = testimonialService.getTestimonialsLength();

    var newId = testimonials.length + 1;
    
    var newPost = {};
    newPost.title = req.body.title;
    newPost.id = newId;
    newPost.testimony = req.body.testimonial;
    newPost.company = req.body.company;
    newPost.name = req.body.name;

    testimonialService.saveTestimonial(newPost);

    res.redirect('/admin/testimonials');
});

module.exports = router;