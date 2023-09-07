import db from '../config/Database.js';
import productsService from '../services/productsService.js';
import Product from '../models/ProductsModel.js';

const isValidProductId = (productId) => {
  return productId.match(/^[0-9a-fA-F\-]{36}$/); // Assuming the product ID is a 24-character hexadecimal string (MongoDB ObjectId)
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });

    if (product[0] == null) {
      res.json({ status: 'fail', message: 'No product' });
    } else {
      res.json(product[0]);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: 'Product Created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Product Updated',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Product Deleted',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Middleware function to check the correctness of the product ID
export const validateProductId = (req, res, next) => {
  const productId = req.params.id;

  if (!isValidProductId(productId)) {
    return res.status(404).json({ status: 'fail', error: 'Invalid product ID' });
  }

  next();
};

export const checkProducts = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ status: 'fail', message: 'Title is required' });
  }

  next();
};
