const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const routes = require('./routes/routes');
const port = process.env.PORT


app.use(cors({
    origin: ['http://localhost:7000', 'https://food-order-app-ukhn.onrender.com', 'https://food-order-app-pink.vercel.app'], // Add your domains here
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));


app.use(express.json());
require('./db/db');
app.use(routes);


app.listen(port, () => {
    console.log("app running on port no", port);
})