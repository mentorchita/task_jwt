const express = require ("express");
const dotenv = require ( "dotenv");
const cookieParser = require ( "cookie-parser");
const cors = require ( "cors");
const db = require ( "./config/Database.js");
const usersRouter = require ( "./routes/userRoutes.js");
const aboutRoutes = require ( './routes/aboutRoute.js');
const productsRoutes = require ( './routes/productsRouter.js');
dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use('/users',usersRouter);
app.use('/products',productsRoutes);
app.use('/', aboutRoutes);
 
app.listen(5000, ()=> console.log('Server running at port 5000'));
