const InventoryModel = require('../models/inventory');
const addComputer = async (req, res)  => {
        console.log(req.body);
        const computer = await InventoryModel({
            status: req.body.status,
            date: req.body.date,
            observations: req.body.observations,
            text: req.body.text,
            mark: req.body.mark,
            model: req.body.model,
            serial: req.body.serial,
            so: req.body.so,
            ram: req.body.ram,
            processor: req.body.processor,
            disk: req.body.disk,
            price: req.body.price,
            hdv: req.body.hdv,
            //user: req.params.user
        }).save();
        res.status(201).send(computer);
    }

    const deleteComputer = async (req, res)  => {
        try {
             //await TicketModel.findOneAndDelete({dni:req.params.dni})
             await InventoryModel.findOneAndDelete(req.params.ObjectId);
            res.send({
                message: 'Delete Computer',
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'Error to delete Computer'
            })
            
        }
    }

    const computers = async (req, res) => {
        try {
            const computer = await InventoryModel.find({
                //user: req.params.user
                model: req.body.model
            })
            res.send({
                computer
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'no se pueden mostrar los computers'
            })
            
        }
    }

module.exports = {addComputer, 
                  deleteComputer,
                  computers};