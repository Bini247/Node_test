var fs = require('fs');

var postsFilePath = 'db/products.json';

var getProducts = function(){
    var fileData = fs.readFileSync(postsFilePath, 'utf8');

    var products = JSON.parse(fileData);

    return products;
}

var saveFileProducts = function(products){
    var data = JSON.stringify(products);
    fs.writeFileSync(postsFilePath, data, 'utf8');
}

var getProductsLength = function(){
    var products = getProducts();
    return products;
}

var saveProducts = function(newPost){

    var products = getProducts();
    products.push(newPost);    
    saveFileProducts(products);
}

module.exports = {
    getProducts: getProducts,
    saveProducts: saveProducts,
    getProductsLength: getProductsLength
}