
const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
const user = require('../models/user');
// var request = require('request');
// require('request-debug')(request);
// const router = express.Router();

const app = express();
app.use(express.urlencoded());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

/* GET home page. */
app.get('/login', (req, res) => {
  res.render('index', { title: 'Express' });

});
app.post('/submit-form', function(req, res){
  user.login;
});
  // res.write(username);
  // res.end();
  // console.dir(res);
app.get('/api/user', user.getUser);
module.exports = app;
