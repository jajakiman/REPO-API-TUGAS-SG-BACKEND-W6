const db = require('../models'); 
const User = db.User;

async function createUser(name, email, password) {
    try {

        if (!name || !email || !password) {
            throw new Error('Name, email, and password are required');
        }

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        const newUser = await User.create({ name, email, password });
        return "User created successfully: " + newUser.name;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

async function getUserById(id) {
    try {
        if (!id) {
            throw new Error('User ID is required');
        }

        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }   catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

module.exports = { createUser, getUserById };