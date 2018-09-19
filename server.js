const express = require("express");
const path = require("path");
// const fs = require("fs");

const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "/");

app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.render('index.html');
});
app.get("/careers", (req,res,next)=>{
    res.sendFile(publicPath + "careers.html");
});
app.get("/about", (req,res,next)=>{
    res.sendFile(publicPath + "about.html");
});
app.get("/how-it-works", (req,res,next)=>{
    res.sendFile(publicPath + "howitworks.html");
});
app.get("/contact", (req,res,next)=>{
    res.sendFile(publicPath + "contact.html");
});
app.listen(port, () =>{
    console.log(`Portal open on port ${port}`);
});