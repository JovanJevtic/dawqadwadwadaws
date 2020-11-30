const express = require('express');
const mognoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv').config({ path: './.env' });

//* App
const app = express();

//* Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main', extname: '.hbs', }));
app.set('view engine', 'handlebars');

//* Body-parser
app.use(express.json());

//* Static folder
app.use(express.static(path.join(__dirname, 'public')))

//* Routes
app.use('/', require('./routes/index'));

//* App running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});
