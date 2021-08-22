const express = require('express');
const app = express();
app.get('/', (req, res)=> {
    res.send('Welcome to home page');
});
app.get('/about', (req, res)=> {
    res.write('Welcome to about page');
    res.send();
});
app.get('/contact', (req, res)=> {
    res.send('Welcome to contact page');
});
app.get('/temp', (req, res)=> {
    res.send([{ //array of objects
        id : 52,
        name : 'Tanu',
    }]);
});
// can be done by re.send and res.json()
// res.json() is used to send an object , it converts the object and non-objects to JSON and sends it to the client

app.listen(3000, ()=> {
    console.log('listening on port 3000!');
});