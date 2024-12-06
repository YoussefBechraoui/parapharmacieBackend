const SignClient = require ('../models/SignClient')

const addClient = async (req,res) => {

    try{
        const Client = await SignClient.create(req.body)
        res.status(201).json({ Client })
    }catch (err){
        res.status(500).json({msg: err})
    }
}

module.exports = { 
    addClient
    }