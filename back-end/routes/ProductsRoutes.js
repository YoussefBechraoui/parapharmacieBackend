const express = require('express');
//const { model } = require('mongoose');
const { addOneProduct, editProduct, getAllProduct } = require('../controller/ProductsController.js')
const router = express.Router();

router.route('/add')
.post(addOneProduct)

router.route('/edit/:id')
.put(editProduct)

router.route('/getAll')
.get(getAllProduct)


module.exports = router


//endpoints