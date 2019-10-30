var express = require('express');
var router = express.Router();
var productService = require('../services/products');

router.get('/', function(req, res, next) {
    var products = productService.getProducts();

    var viewData = {    
        title: 'Produtos',
        products: products
    }
    res.render('products', viewData);
});

module.exports = router;