const express = require('express');
const mongoose = require('mongoose');

const app = express();
if (process.env.NODE_ENV !== 'production') require('dotenv').config();


//? DATABASE 
mongoose.connect( process.env.DB_URL , {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


//? MIDDLEWAERS
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static('public'));


//? ROUTING
const router = require('./routes/index');
app.use('/', router);

//? RUNNING
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
}); 