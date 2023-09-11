const express =require ("express");


const aboutRoute = express.Router();

aboutRoute.get("/", (req, res) => {
     const aboutInfo ={
         name: "My Programm",
         description: "Sprint JWT programm",
         author: "SoftServe"
    }
    res.json(aboutInfo)
})

module.exports = aboutRoute;