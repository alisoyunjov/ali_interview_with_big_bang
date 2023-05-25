const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const app = express();

// bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// setting header information
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


//api middlewares

app.use('/api/users', users);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));