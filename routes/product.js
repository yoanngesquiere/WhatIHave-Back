var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var db = req.db;

    var collection = db.get('products');
    collection.find({},{},function(e,products){
        res.send(products);
    });
});

//Get a specific product
router.get('/:id', function(req, res) {
    var product_id = req.params.id;
    var db = req.db;

    var collection = db.get('products');
    collection.find({id: parseInt(product_id)},function(e,products){
        res.send(products);
    });
});

//New product creation
router.post('/', function(req, res) {
    var db = req.db;
    var collection = db.get('products');
    collection.insert(req.body);
    res.send();
});

module.exports = router;
