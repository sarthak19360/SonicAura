const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'Pending' }, // You can add more order status options as needed
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
