const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    status: {
        type: Boolean,
        required: [true, 'Required field']
    },
    date: {
        type: Date,
        required: [true, 'Required field']
    },
    hour: {
        type: String,
        require: [true, 'Required field']
    },
    observations: {
        type: String
    },
    dni: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const TicketModel = mongoose.model('tickets', TicketSchema);
module.exports = TicketModel;