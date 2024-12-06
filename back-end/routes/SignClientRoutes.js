const express = require('express');
//const { model } = require('mongoose');
const { addClient } = require('../controller/SignClientController.js')
const router = express.Router();

router.route('/add')
.post(addClient)




module.exports = router


//endpoints