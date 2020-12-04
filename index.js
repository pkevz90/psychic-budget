const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');

const PORT =  process.env.PORT | 3000;

app.set('view engine','ejs');

app.use(bodyParser.json());

app.get('/', checkLogin, (req,res) => {
    res.render('main');
})

app.get('/login', checkLogin, (req,res) => {
    res.render('login');
})

app.post('/login', async (req,res) => {
    const {username, password} = req.body;
    let valid = bcrypt.compare(password, '');
    if (valid) {
        res.redirect('/');
    }
    else {
        res.redirect('/login');
    }
})

function checkLogin(req, res, next) {
    let loggedIn = true;
    if (loggedIn) {
        next();
    }
    else {
        res.redirect('/login');
    }
}

app.listen(PORT, console.log('localhost:' + PORT));