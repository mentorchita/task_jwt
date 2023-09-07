import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import usersRouter from "./routes/userRoutes.js";
import aboutRoutes from './routes/aboutRoute.js';
import productsRoutes from './routes/productsRouter.js';
dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use('/users',usersRouter);
app.use('/products',productsRoutes);
app.use('/', aboutRoutes);
 
app.listen(5000, ()=> console.log('Server running at port 5000'));
