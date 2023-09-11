const db = require('../config/Database.js');
const { v4: uuidv4 } = require('uuid');

const createProduct = async function (title, price, desc) {
  const query = 'INSERT INTO product (id, title, price, description, createdAt) VALUES (?, ?, ?, ?, ?)';
  const dateCreate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  try {
    await db.query(query, [uuidv4(), title, price, desc, dateCreate]);
  } catch (err) {
    throw err;
  }
};

module.exports = createProduct;
