const express = require('express');
const stockInController = require('../controllers/stockin');
const router = express.Router();

router.post('/', stockInController.createStockIn);
router.get('/', stockInController.getAllStockIn);
router.get('/:id', stockInController.getStockInById);
router.put('/:id', stockInController.updateStockIn);
router.delete('/:id', stockInController.deleteStockIn);

module.exports = router;
