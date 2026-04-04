const express = require('express');
const routers = express.Router();

routers.get('/add-product', (req, res, next) => {
  res.send('Hello Add Product! <form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

routers.post('/product', (req,res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = routers;