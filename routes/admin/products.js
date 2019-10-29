var express = require('express');
var router = express.Router();
var productService = require('../../services/products');

router.get('/', function(req, res, next) {
    var products = productService.getProducts();

    var viewData = {    
        title: 'Produtos',
        products: products
    }
    res.render('admin/products/index', viewData);
});

router.get('/create', function(req, res, next) {
    
    res.render('admin/products/create');
});

router.post('/create', function(req, res, next) {
    var products = productService.getProductsLength();

    var newId = products.length + 1;
    
    var newProduct = {};
    newProduct.id = newId;
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.description = req.body.description;
    newProduct.image = req.body.image;

    productService.saveProducts(newProduct);

    res.redirect('/admin/products');
});

module.exports = router;