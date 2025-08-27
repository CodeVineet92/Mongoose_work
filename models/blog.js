const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    phone: {
        type: Number,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('/blogs',dbSchema);