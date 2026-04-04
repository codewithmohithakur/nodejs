
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParse = require('body-parser');
const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
const port = 3000;

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(port);
