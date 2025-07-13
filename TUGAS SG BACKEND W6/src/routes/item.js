const express = require('express');
const itemController = require('../controllers/item');
const router = express.Router();

router.post('/', itemController.createItem);
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
