const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

// Models
const Product = require('../../models/Product');
const Review = require('../../models/Review');

// Relationship or Association
// @desc Product can have many reviews
Product.hasMany(Review, { foreignKey: 'product_id', as: 'reviews' });

// Relationship or Association
// @desc Review is only belong to a specific product
Review.belongsTo(Product, { foreignKey: 'product_id' });

/*
 * @route 	GET api/products
 * @desc 	Get All products
 * @access 	Public
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
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
  asyncHandler(async (req, res) => {
    const product = await Product.findOne({
      where: { id: parseInt(req.params.id) },
      include: 'reviews',
    });

    // Check if there is a product
    if (!product) {
      res.status(404);
      throw new Error('Product does not exist');
    }

    res.status(200).json({ product });
  })
);

module.exports = router;
