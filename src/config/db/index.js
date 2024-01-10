const mongoose = require('mongoose');

async function Connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('Connect Succesfully');
    } catch (error) {
        console.log('ERROR');
    }
}

module.exports = { Connect };