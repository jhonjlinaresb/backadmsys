'use strict';
const mongoose = require('mongoose');

const db_path = process.env.MongoURI || 'mongodb://localhost/dbadmsys';
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(db_path, config, error =>{
    if (!error) {
        console.log('Successful connection.');
    } else {
        console.log('Error connecting to database.');
    }
});