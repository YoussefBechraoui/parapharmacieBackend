const mongoose = require('mongoose');



const SignClientSchema = new mongoose.Schema({
    nom:{
        type:{
            type: String,
        },
    },
    prenom:{
        type:{
            type: String,
        },
    },
    age:{
        type:{
            type: String,
        },
    },
     email:{
        type:{
            type: String,
        },
    },
    psw:{
        type:{
            type: Float,
        },
    },
   

})

    module.exports = mongoose.model('SignClient', SignClientSchema)