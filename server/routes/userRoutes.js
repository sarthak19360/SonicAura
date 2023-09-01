const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User registration
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Validate user input
        if (!(email && password && username)) {
            res.status(400).send("All input is required");
        }
        // Check if the email is already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Create a new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ userId: newUser._id },
            process.env.TOKEN_KEY,
            { expiresIn: '1h', }
        );

        res.status(201).json({ message: 'User registered', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            return res.status(400).json({
                msg: "All input is required"
            });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        // If the user is not found, return an error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the provided password matches the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // If the password is not valid, return an error
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate a JWT token for the authenticated user
        const token = jwt.sign({ userId: user._id },
            process.env.TOKEN_KEY,
            {
                expiresIn: '1h',
            });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
