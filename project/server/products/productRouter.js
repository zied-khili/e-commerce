var productRouter = require('express').Router();
var productController = require('./productController');


// TODO: Create route handlers for each of the six methods in productController
productRouter.route('/prod')
.get(productController.retrieve)
.post(productController.createOne)

productRouter.route('/:name')
.get(productController.retrieveOne)
.put(productController.updateOne)
.delete(productController.deleteOne)

productRouter.route('/:name/hello')
.put(productController.updateOne1)
module.exports = productRouter;