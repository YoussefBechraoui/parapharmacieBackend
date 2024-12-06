const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
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

    description:{
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

module.exports = mongoose.model('Products', ProductsSchema)