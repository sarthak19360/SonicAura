const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const authenticateToken = require('../middleware/authMiddleware');

// Create a new order
router.post('/orders', authenticateToken, async (req, res) => {
    try {
        const { userId, products, amount, address } = req.body;
        // validate all the inputs
        if(!(userId && products && amount && address)) {
            return res.status(400).json({
                msg:'All the fields are required!',
            })
        }
        // Create a new order
        const order = new Order({ userId, products, amount, address });

        // Save the order to the database
        await order.save();

        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get orders for a specific user
router.get('/orders/:userId', authenticateToken, async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ userId }).sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
