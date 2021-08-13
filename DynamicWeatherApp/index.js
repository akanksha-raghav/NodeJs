const http = require('http');
const fs = require('fs');
var requests = require("requests");
const home = fs.readFileSync("home.html","utf-8");

const replaceVal =(tempVal , orgVal) =>{
    let temper = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temper = temper.replace("{%tempmin%}", orgVal.main.temp_min);
    temper = temper.replace("{%tempmax%}", orgVal.main.temp_max);
    temper = temper.replace("{%location%}", orgVal.name);
    temper = temper.replace("{%country%}", orgVal.sys.country);
    temper = temper.replace("{%tempstat%}", orgVal.weather[0].main);
    return temper;
    
}

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
    requests(
        'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=74b40cfd3a9f8e2d0d34797aa38d8aa4', 
        )
    .on('data',(chunk) => {
        const objData = JSON.parse(chunk);
        const arrayData = [objData];
        // console.log(arrayData);
        const realTime = arrayData.map((val)=>
            replaceVal(home,val)).join("");
            // console.log(realTime);
        res.write(realTime);
    })
    .on('end', (err) => {
    if (err) return console.log('connection closed due to errors', err);
    res.end();
    });
    }
});
server.listen(3000,"127.0.0.1");