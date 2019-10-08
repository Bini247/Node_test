var fs = require('fs');

var postsFilePath = 'db/posts.json';

var getTestimonials = function(){
    var fileData = fs.readFileSync(postsFilePath, 'utf8');

    var testimonials = JSON.parse(fileData);

    return testimonials;
}

module.exports = {
    getTestimonials: getTestimonials
}