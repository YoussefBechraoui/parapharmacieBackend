const Products = require('../models/Products.js')

const addOneProduct = async (req,res) => {

    try{
        const product = await Products.create(req.body)
        res.status(201).json({ product })
    }catch (err){
        res.status(500).json({msg: err})
    }
}


const editProduct = async (req,res) => {
    try{
        const {id:productId} = req.params
        const updatedProduct = await Products.findOneAndUpdate({_id: productId}, req.body,{ new: true, runValidators: true})
        if(!updatedProduct){
            return res.status(404).json({msg: 'no User with the ID: ${eventID}'})
        }
        res.status(202).json({updatedProduct})
    }catch(err){
        res.status(500).json({msg: err})
    }
}

const getAllProduct = async (req, res) => {
    try {
        const product = await Products.find({});
        res.status(200).json({ product });
    } catch (err) {
        res.status(500).json({ msg: err });
    }
}

module.exports = { 
addOneProduct,
editProduct,
getAllProduct
}


