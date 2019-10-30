var express = require('express');
var router = express.Router();
var shoppingcarService = require('../services/shopping-car');

router.get('/', function(req, res, next) {
    var products = shoppingcarService.getProductsInCar();

    var viewData = {    
        title: 'Carrinho de compras',
        products: products
    }

    res.render('shopping-car', viewData);
});

router.post('/create', function(req, res, next) {
    var products = shoppingcarService.getProductsLength();

    var newId = products.length + 1;
    
    var newProduct = {};
    newProduct.id = newId;
    newProduct.product_id = req.body.id;

    shoppingcarService.saveProducts(newProduct);

    res.redirect('/products');
});

router.post('/clear', function(req, res, next) {
    var products = shoppingcarService.clearShoppingCar();

    res.redirect('/shopping-car');
});

module.exports = router;