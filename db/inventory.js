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
            user: req.body.user
        }).save();
        res.status(201).send(computer);
    }

    const deleteComputer = async (req, res)  => {
        try {
             await InventoryModel.findByIdAndDelete(req.params._id);
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
            const computer = await InventoryModel.findById({
                _id: req.params._id
                //model: req.body.model
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

    const modifyComputer = async (req, res) => {
        InventoryModel.findByIdAndUpdate(req.body._id,
            {   status: req.body.status,
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
                user: req.body.user}, {new:true, useFindAndModify:false})
        .then( (computer) => {
    
            if(computer){
    
                if(computer){
                    //then positively computer was found and updated.
                    res.send(computer);
                }else{
                    res.send({"message": "Oops! there was an error updating the changes."})
                }
                
            }
        }).catch (err => console.log(err));
    }

    const showInventory = (req, res) => {
     
        //we show all computers
        InventoryModel.find({})
        .then(inventories=>{
            res.send(inventories)
        })
        .catch(error=>console.log(error))
    
        }

module.exports = {addComputer, 
                  deleteComputer,
                  computers,
                  modifyComputer,
                  showInventory};