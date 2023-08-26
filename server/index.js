
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



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})