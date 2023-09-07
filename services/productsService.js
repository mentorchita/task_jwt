import db from '../config/Database.js';
import { v4 as uuidv4 } from 'uuid';

 const createProduct = async (title, price, desc) => {
  const query = 'INSERT INTO product (id, title, price, description, createdAt) VALUES (?, ?, ?, ?, ?)';
  const dateCreate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  try {
    await db.query(query, [uuidv4(), title, price, desc, dateCreate]);
  } catch (err) {
    throw err;
  }
};

export default createProduct