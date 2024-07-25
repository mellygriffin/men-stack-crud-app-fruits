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

app.use(express.urlencoded({ extended: false }));//accessing middleware
//parces incoming requests to the body(place ABOVE your routes)

//GET '/' to the root route - AKA landing page
app.get('/', async (req, res) => {
    res.render("index.ejs");//connects to our html file
});

//GET /fruits - fruit index route
app.get("/fruits", async (req, res) => {
    const allFruits = await Fruit.find();
    res.send("Welcome to the index page!");
})

//GET page to create new fruits!
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
})

//POST /fruits
app.post("/fruits", async (req, res) => {
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;//changing checkbox default value to boolean
    } else {
        req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits/new");//moves to specific path AFTER form submission
})




app.listen(3000, () => { //listens for anytype of requests
    console.log("Listening on Port 3000")
})

//------------- Blah Blah Blah -----------------//