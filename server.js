//------------- Starter Code -----------------//

//Here's where we import modules - Express
const express = require("express");

const app = express();

app.listen(3000, () => { //listens for anytype of requests
    console.log("Listening on Port 3000")
})

//GET '/' to the root route - AKA landing page
app.get('/', async (req, res) => {
    res.render("index.ejs");//connects to our html file
});

//------------- Blah Blah Blah -----------------//