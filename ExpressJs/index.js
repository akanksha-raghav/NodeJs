// express.static built in middleware
const path = require('path');
const express = require("express");
const app = express();
const hbs = require('hbs');

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));
// console.log(__dirname);
app.set("views", path.join(__dirname, "../templates"));
hbs.registerPartials(path.join(__dirname, "../views/partials"));

app.get("/",(req,res) =>{
    res.send("Hey!!");
});
app.get('/about',(req,res)=>{
    res.send("About us page");
});
app.listen(8000,()=>{
    console.log("Listening");
});