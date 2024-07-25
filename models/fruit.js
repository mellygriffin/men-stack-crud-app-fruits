const mongoose = require("mongoose");//must have to create schema

const fruitSchema = new mongoose.Schema({ //created schema
    name: String,
    isReadyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema);//created model

module.exports = Fruit;//allows you to pull it into server.js routes

