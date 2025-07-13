const userService = require('../services/user');

const createUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const result = await userService.createUser(name, email, password);
        res.status(201).json({ status: "success", message: result });
    } catch (error) {
        console.error('Error in creating user:', error);
        res.status(500).json({ status: "error", error: error.message });
    }
}

const getUserByIdController = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        res.status(200).json({ status: "success", data: user });
    } catch (error) {
        console.error('Error in fetching user:', error);
        res.status(500).json({ status: "error", error: error.message });
    }
}

module.exports = { createUserController, getUserByIdController };