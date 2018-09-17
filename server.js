const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "/");

app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.render('index.html');
});
app.listen(port, () =>{
    console.log(`Portal open on port ${port}`);
});