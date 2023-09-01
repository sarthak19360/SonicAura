const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const authenticateToken = require('../middleware/authMiddleware');

// Add a product to the user's cart
router.post('/cart/add', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId; // Get the user's ID from the JWT token
        const { productId, quantity } = req.body;

        // Find the user's cart or create one if it doesn't exist
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        // Check if the product is already in the cart
        const existingItem = cart.items.find(item => item.productId.toString() === productId);

        if (existingItem) {
            // If the product is already in the cart, update the quantity
            existingItem.quantity += quantity;
        } else {
            // If it's not in the cart, add it as a new item
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json({ message: 'Product added to cart', cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get the user's cart
router.get('/cart', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId; // Get the user's ID from the JWT token

        // Find the user's cart
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
