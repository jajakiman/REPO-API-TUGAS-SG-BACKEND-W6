const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/', userController.createUserController);
router.get('/:id', userController.getUserByIdController);

module.exports = router;