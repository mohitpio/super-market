const mongoose = require('mongoose');

const itemschema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    cost : {
        required: true,
        type: Number
    },
    description : {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('item', itemschema)