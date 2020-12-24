const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema({
    status: {
        type: Boolean,
        required: [true, 'Required field']
    },
    date: {
        type: Date,
        required: [true, 'Required field']
    },
    observations: {
        type: String
    },
    user: {
        type: String,
        required: true
    },
    mark: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    so: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    disk: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const InventoryModel = mongoose.model('Inventory', InventorySchema);
module.exports = InventoryModel;