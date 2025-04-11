const express = require ("express")
const bodyParser = require("body-parser")

const app = express();


const foodItemList = [];

app.get("/" , function(req , res){
    res.render("home" , {
        foodNamePlace: foodName,
        foodPricePlace: foodPrice,
        foodDescriptionPlace: foodDescription
    })
})





















app.lisiten(3000 , function(req , res){

    console.log("Server is running on port 3000")
})