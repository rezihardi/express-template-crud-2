'use strict';

const response200 = require('./res/res200');
const response201 = require('./res/resp-null');
const connection = require('./config/conn');

exports.product = function(req, res) {
    connection.query('SELECT * FROM product', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response200.ok(rows, res)
        }
    });
};

exports.findProduct = function(req, res) {
    let productId = req.params.productId;
    connection.query('SELECT * FROM product where product_id = ?',
    [ productId ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response200.ok(rows, res)
        }
    });
};



exports.createProd = function(req, res) {
    let product_id = req.body.product_id;
    let product_name = req.body.product_name;
    let product_price = req.body.product_price;

    //generate uuid
    const { v4: uuidv4 } = require('uuid');
    let your_uuid = uuidv4();
    connection.query('INSERT INTO PRODUCT (product_id, product_name, product_price) values (?,?,?)',
    [ product_id, your_uuid, product_price ],
    function (error, rows, fields){
        if(error){
            console.log(error)
            let data = {
                'status': "ERROR",
                'message': error
            };
            res.json(data);
            res.end();

        } else{
            console.log();
            // response201.ok(res)
            // response200.ok(rows, res)
            let data = {
                'status': "ok",
                'message': "telah ditambahkan"
            };
            res.json(data);
            res.end();
        }
    });
};

exports.updateProd = function(req, res) {
    
    let product_id = req.body.product_id;
    let product_name = req.body.product_name;

    connection.query('UPDATE product SET product_name = ? WHERE product_id = ?',
    [ product_name, product_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response201.ok(res)
        }
    });
};

exports.deleteProd = function(req, res) {
    let productId = req.params.productId;

    connection.query('delete from product WHERE product_id = ?',
    [ productId ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            //ide sendiri
            let data = {
                'status': "ok",
                'message': "berhasil menghapus id dengan product_id:  " + productId
            };
            res.json(data);
            res.end();
        }
    });
};



exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};