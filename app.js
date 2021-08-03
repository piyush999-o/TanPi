const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const port = 3000;

app.use('/static', express.static('static'));
app.use(express.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');


app.get('/', (req, res)=>{
    res.status(202).render('Index', {title:'Home'});
})

app.get('/about', (req, res)=>{
    res.status(200).render('About', {title:'About of Author'});
})

app.get('/contact', (req, res)=>{
    res.status(200).render('Contact');
})

app.get('/admin', (req, res)=>{
    res.status(200).render('admin');
})

app.listen(port, ()=>{
    console.log(`The Website is Start Hosting on ${port}`);
})
