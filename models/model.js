const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

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

module.exports = mongoose.model('Data', dataSchema)
module.exports = mongoose.model('item', itemschema)