const express = require( 'express');
const { verifyToken } = require( "../middleware/VerifyToken.js");
const productRouter = express.Router();
const { getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    validateProductId,
    checkProducts, } = require( '../controllers/productController.js');

//productRouter.get('/',productController.getAllProducts);
productRouter.get('/', getAllProducts);
productRouter.get('/:id', validateProductId, getProductById);
productRouter.post('/', verifyToken, checkProducts, createProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id',  deleteProduct);


module.exports = productRouter;