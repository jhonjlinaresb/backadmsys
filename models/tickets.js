const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    status: {
        type: Boolean,
        required: [true, 'Required field']
    },
    date: {
        type: Date, Timestamp,
        required: [true, 'Required field']
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