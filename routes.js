'use strict';

module.exports = function(app) {
    let todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/get-all-product')
        .get(todoList.product);

    app.route('/get-one-product/:productId')
        .get(todoList.findProduct);

    app.route('/add-one-product')
        .post(todoList.createProd);

    app.route('/update-product')
        .put(todoList.updateProd);

    app.route('/delete-product/:productId')
        .delete(todoList.deleteProd);
};