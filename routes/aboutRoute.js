import express from "express";


const aboutRoute = express.Router();

aboutRoute.get("/", (req, res) => {
     const aboutInfo ={
         name: "My Programm",
         description: "Sprint JWT programm",
         author: "SoftServe"
    }
    res.json(aboutInfo)
})

export default aboutRoute