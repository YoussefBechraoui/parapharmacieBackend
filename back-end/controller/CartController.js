const Cart = require('../models/Cart.js')

const addToCart = async (req,res) => {

    try{
        const Carts = await Cart.create(req.body)
        res.status(201).json({ Carts })
    }catch (err){
        res.status(500).json({msg: err})
    }
}


const deleteFromCart = async (req,res) => {
    try{
        const {id : CartID} = req.params;
        const bag = await Bag.findOneAndDelete({_id: CartID})
        res.status(203).json({Cart})
    }catch(err){
        res.status(500).json({msg: err})
    }
}

module.exports = { 
addToCart,
deleteFromCart
}


