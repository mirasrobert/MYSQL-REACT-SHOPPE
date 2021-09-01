const express = require('express');
const router = express.Router();
const AsyncHandler = require('express-async-handler');

// Models
const Product = require('../../models/Product');

/*
 * @route 	GET api/products
 * @desc 	Get All products
 * @access 	Public
 */
router.get(
  '/',
  AsyncHandler(async (req, res) => {
    const products = await Product.findAll();

    res.status(200).json({ products });
  })
);

/*
 * @route 	GET api/products/:id
 * @desc 	Get single product by id
 * @access 	Public
 */
router.get(
  '/:id',
  AsyncHandler(async (req, res) => {
    const product = await Product.findByPk(req.params.id); // find by primary key

    // Check if there is a product
    if (!product)
      return res.status(404).json({ msg: 'Product does not exist' });

    res.status(200).json({ product });
  })
);

module.exports = router;
