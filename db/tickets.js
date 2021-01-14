const TicketModel = require('../models/tickets');
const adduserTicket = async (req, res)  => {
        console.log(req.body);
        const ticket = await TicketModel({
            status: req.body.status,
            date: req.body.date,
            hour: req.body.hour,
            observations: req.body.observations,
            text: req.body.text,
            dni: req.params.dni
        }).save();
        res.status(201).send(ticket);
    }

    const deleteOne = async (req, res)  => {
        try {
             await TicketModel.findByIdAndDelete(req.params.id);
             //await TicketModel.findOneAndDelete(req.params.ObjectId);
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

    const showTickets = (req, res) => {
     
    
        //we show all tickets
        TicketModel.find({})
        .then(tickets=>{
            res.send(tickets)
        })
        .catch(error=>console.log(error))
    
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
                  showTickets,
                  userTickets};