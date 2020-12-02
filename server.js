const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path');
if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: './.env' });

//* App
const app = express();

//* Database connection
mongoose.connect( process.env.DB_URI , {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

//* Handlebars
const { formatDate } = require('./helpers/hbs');

app.engine('.hbs', exphbs({helpers: { formatDate }, defaultLayout: 'main', extname: '.hbs', }));
app.set('view engine', '.hbs');

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