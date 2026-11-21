const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  adjustStock,
  deleteProduct,
  getLowStockProducts,
  getCategorySummary
} = require('../controllers/productController');
const {
  validateProductInput,
  validateStockAdjustment
} = require('../middleware/validateProduct');

router.get('/low-stock', getLowStockProducts);
router.get('/summary', getCategorySummary);

router.route('/')
  .post(validateProductInput, createProduct)
  .get(getAllProducts);

router.route('/:id')
  .get(getProductById)
  .put(validateProductInput, updateProduct)
  .delete(deleteProduct);

router.patch('/:id/stock', validateStockAdjustment, adjustStock);

module.exports = router;
