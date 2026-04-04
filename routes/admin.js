const express = require('express');
const routers = express.Router();


// admin/add-product => GET
routers.get('/add-product', (req, res, next) => {
  res.send('Hello Add Product! <form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// admin/add-product => POST
routers.post('/product', (req,res) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports = routers;