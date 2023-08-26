
const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

const users = [
    {
        id: 1,
        username: 'user1',
        password: 'random123', // Hashed password for 'password1'
    },
    {
        id: 2,
        username: 'user2',
        password: 'ransom456', // Hashed password for 'password2'
    },
    // Add more users as needed
];

const products = [
    {
        id: 1,
        name: "Blue Headphone",
        desc: "Experience the brilliant blend of style and sound with our Blue Headphone. Elevate your music journey today.",
        price: "$49",
    },
    {
        id: 2,
        name: "Green Headphone",
        desc: "Get lost in the lush soundscapes delivered by our Green Headphone. A fusion of design and audio excellence.",
        price: "$39",
    },
    {
        id: 3,
        name: "White Headphone",
        desc: "Discover pristine audio clarity and timeless elegance with our White Headphone. The ultimate listening companion.",
        price: "$49",
    },
    {
        id: 4,
        name: "Black Headphone",
        desc: "Immerse yourself in the deep, rich tones of our Black Headphone. A true masterpiece of audio technology.",
        price: "$49",
    },
];

const cartProducts = [
    {
        id: 1,
        name: "Blue Headphone",
        desc: "Experience the brilliant blend of style and sound with our Blue Headphone. Elevate your music journey today.",
        price: "$49",
    },
    {
        id: 3,
        name: "White Headphone",
        desc: "Discover pristine audio clarity and timeless elegance with our White Headphone. The ultimate listening companion.",
        price: "$49",
    },

];

app.get('/', (req, res) => {
    res.status(200).json({
        data: 'Hello World',
        msg: 'This is a home page!'
    })
})

app.get('/products', (req, res) => {
    res.status(200).json({
        products
    })
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const item = products.find((product) => product.id === Number(id));
    if (!item) {
        return res.status(400).json({
            message: `Item with id ${id} not found`,
        });
    }
    res.status(200).json({
        item
    });
});

app.post('/login', async (req, res) => {
    // extract username and password from body
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    // Find the user by username in the users array
    const user = users.find(u => u.username === username);
    // if it does not then return username not registered
    if (!user) {
        return res.status(400).json({ message: 'Username not registered' });
    }
    // Compare the provided password with the stored hashed password
    const isMatch = (password === user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
    }
    res.status(200).json({
        message: 'Logged in successfully',
    });
})

app.post('/signup', async (req, res) => {
    // extract username and password from body
    const { username, password } = req.body;
    // Check if both username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    // Find the user by username in the users array
    const user = users.find(u => u.username === username);
    // if it does not then return username not registered
    if (user) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    const newUser = {
        id: users.length + 1,
        username: username,
        password: password,
    };
    users.push(newUser);
    res.status(201).json({
        message: 'Username registered successfully'
    });
})

app.get('/cart',(req,res) => {
    res.status(200).json({
        cartProducts
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})