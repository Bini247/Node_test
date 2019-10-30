var fs = require('fs');

var carFilePath = 'db/shopping-car.json';
var productsFilePath = 'db/products.json';

var getProductsInCar = function(){
    var fileData = fs.readFileSync(carFilePath, 'utf8');
    var fileProductsData = fs.readFileSync(productsFilePath, 'utf8');

    var car = JSON.parse(fileData);
    var products = JSON.parse(fileProductsData);

    var productsInCar = [];

    products.forEach(product => {
        car.forEach(c => {
            if(product.id == c.product_id) {
                productsInCar.push(product);
            }
        })
    });
    
    return productsInCar;
}

var getProducts = function(){
    var fileData = fs.readFileSync(carFilePath, 'utf8');

    var products = JSON.parse(fileData);

    return products;
}

var saveFileProducts = function(products){
    var data = JSON.stringify(products);
    fs.writeFileSync(carFilePath, data, 'utf8');
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

var clearShoppingCar = function(){
    var products = [];
    saveFileProducts(products);
}

module.exports = {
    getProductsInCar: getProductsInCar,
    clearShoppingCar: clearShoppingCar,
    getProducts: getProducts,
    saveProducts: saveProducts,
    getProductsLength: getProductsLength
}