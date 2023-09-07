import express from 'express';
import { verifyToken } from "../middleware/VerifyToken.js";
const productRouter = express.Router();
import { getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    validateProductId,
    checkProducts, } from '../controllers/productController.js';

//productRouter.get('/',productController.getAllProducts);
productRouter.get('/', getAllProducts);
productRouter.get('/:id', validateProductId, getProductById);
productRouter.post('/', verifyToken,checkProducts, createProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);


export default productRouter;