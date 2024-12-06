const express = require('express');
//const { model } = require('mongoose');
const { addToCart, deleteFromCart } = require('../controller/CartController.js')
const router = express.Router();

router.route('/add')
.post(addToCart)

router.route('/delete/:id')
.delete(deleteFromCart)




module.exports = router


//endpoints