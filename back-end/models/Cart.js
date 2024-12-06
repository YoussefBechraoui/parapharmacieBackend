const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    name:{
        type:{
            type: String,
        },
    },

    price:{
        type:{
            type: float,
        },
    },

    brand:{
        type:{
            type: String,
        },
    },

    

    image_prod:{
        type:{
            type: String,
        },
    },
})

module.exports = mongoose.model('Cart', CartSchema)