const express = require('express');
const app = express();
const routes = require('./routes.js')


app.set("view engine", "pug");

app.get('/', (req, res) =>{
    res.send("Hello from Express!")
})

app.get('/*xyz', (req, res) =>{
    res.send("That's all I wrote.")
})

app.get('/capital-letters/:id', (req, res) =>{
    const bigWord = req.params.id
    res.send(bigWord.toUpperCase())
})

app.use('/:id/', routes);


app.all('/\\w+-?\\w+$', (req, res) => {
    res.render('generic', { method:req.method, path:req.path, randomNum:Math.round(Math.random())})
})

const port = 8081

app.listen(port, () => console.log(`Listening on port ${port}`));
