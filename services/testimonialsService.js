var fs = require('fs');

var postsFilePath = 'db/posts.json';

var getTestimonials = function(){
    var fileData = fs.readFileSync(postsFilePath, 'utf8');

    var testimonials = JSON.parse(fileData);

    return testimonials;
}

var saveFileTestimonial = function(testimonials){
    var data = JSON.stringify(testimonials);
    fs.writeFileSync(postsFilePath, data, 'utf8');
}

var getTestimonialsLength = function(){
    var testimonials = getTestimonials();
    return testimonials;
}

var saveTestimonial = function(newPost){

    var testimonials = getTestimonials();
    testimonials.push(newPost);    
    saveFileTestimonial(testimonials);
}

module.exports = {
    getTestimonials: getTestimonials,
    saveTestimonial: saveTestimonial,
    getTestimonialsLength: getTestimonialsLength
}