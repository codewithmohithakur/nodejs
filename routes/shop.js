const express = require('express');
const routers = express.Router();

routers.get('/', (req, res) => {
  res.send(`Hello Welcome to shop routes!!`);
});

module.exports = routers;