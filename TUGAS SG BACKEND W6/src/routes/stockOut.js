const express = require('express');
const stockOutController = require('../controllers/stockout');
const router = express.Router();

router.post('/', stockOutController.createStockOut);
router.get('/', stockOutController.getAllStockOut);
router.get('/:id', stockOutController.getStockOutById);
router.put('/:id', stockOutController.updateStockOut);
router.delete('/:id', stockOutController.deleteStockOut);

module.exports = router;
