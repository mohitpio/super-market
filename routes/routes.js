const express = require('express');

const router = express.Router()
const Model = require('../models/model')

module.exports = router;

//Get all
router.get('/getAll', async (req, res) => {
    try{
        const item = await Model.find();
        res.json(item)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const item = await Model.findById(req.params.id);
        res.json(item)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Model.findByIdAndDelete(id)
        res.send(`Item with ${item.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Post Method
router.post('/post', async (req, res) => {
    const item = new Model({
        name: req.body.name,
        cost: req.body.cost,
        description: req.body.description,
    })

    try {
        const itemToSave = await item.save();
        res.status(200).json(itemToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})