const TicketModel = require('../models/tickets');
const adduserTicket = async (req, res)  => {
        console.log(req.body);
        const ticket = await TicketModel({
            status: req.body.status,
            date: req.body.date,
            hour: req.body.date,
            observations: req.body.observations,
            text: req.body.text,
            dni: req.params.dni
        }).save();
        res.status(201).send(ticket);
    }

    const deleteOne = async (req, res)  => {
        try {
             //await TicketModel.findOneAndDelete({dni:req.params.dni})
             await TicketModel.findOneAndDelete(req.params.ObjectId);
            res.send({
                message: 'Delete Ticket',
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'Error to delete Ticket'
            })
            
        }
    }

    const userTickets = async (req, res) => {
        try {
            const ticket = await TicketModel.find({
                dni: req.params.dni
            })
            res.send({
                ticket
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'no se pueden mostrar los tickets'
            })
            
        }
    }

module.exports = {adduserTicket, 
                  deleteOne,
                  userTickets};