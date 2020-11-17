const express = require('express');
const app = express();

app.set("view engine", "pug");

app.get('/', (req, res) =>{
    res.send("Hello from Express!")
})

app.all('*', (req, res) => {
    res.render('generic', { method:req.method, path:req.path, randomNum:Math.round(Math.random())})
})

const port = 8081

app.listen(port, () => console.log(`Listening on port ${port}`));


