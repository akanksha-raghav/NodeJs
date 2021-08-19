const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

// app.get(route,callback);
// API 
// get - read 
// post - create 
// put - update
// delete - delete
const staticPath = path.join(__dirname, "../public");

// set view engine
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "../partials"));
// app.use(express.static(staticPath));

// customisizing views directory
// app.set("views", path.join(__dirname, "../folderName"));app.set("views", path.join(__dirname, "../folderName"));

//template engine route
app.get("/", (req, res) => {
    res.render("index.hbs",{
        // dynamic content
        // key : value ;
    });
});

app.get("/",(req,res) =>{
    res.send("Hello World");
});
app.get('/about',(req,res)=>{
    res.send("About us page");
});

// The callback function has 2 parameters, request(req) and response(res).
// The request object represents the http request sent by the client and has
// properties for the request query string, parameter,body, http headers, etc.
// Similarly the response object represents the http response that the Express app sends when it receives an req sent back to the client.

app.listen(8000,()=>{
    console.log("Listening");
});
