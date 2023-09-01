const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const cartRoutes = require('./routes/cartRoutes')
const authenticateToken = require('./middleware/authMiddleware')
const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err);
    });

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/user", userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes)
app.use('/api', cartRoutes)

// protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend server is running!");
});