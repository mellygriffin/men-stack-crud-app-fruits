//------------- Starter Code -----------------//

//Here's where we import modules - Express, DotEnv
const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
const mongoose = require("mongoose");//require package

const app = express();

mongoose.connect(process.env.MONGODB_URI);
//log connection status to terminal at start
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})


//Import the Fruit model from fruit.js
const Fruit = require("./models/fruit.js");

app.use(express.urlencoded({ extended: false }));

//GET '/' to the root route - AKA landing page
app.get('/', async (req, res) => {
    res.render("index.ejs");//connects to our html file
});

//GET page to create new fruits!
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
})

app.listen(3000, () => { //listens for anytype of requests
    console.log("Listening on Port 3000")
})

//------------- Blah Blah Blah -----------------//