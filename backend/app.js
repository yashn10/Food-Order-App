const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const routes = require('./routes/routes');
const port = process.env.PORT

require('./db/db');

app.use(express.json());


const allowedOrigins = [
    'http://localhost:3000',
    'https://food-order-app-pink.vercel.app'
];

const corsOptions = {
    origin: function (origin, callback) {
        console.log('Request Origin:', origin);  // Log the request origin
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.error('Blocked by CORS:', origin);  // Log blocked origin
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};


app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));


app.use(routes);


app.listen(port, () => {
    console.log("app running on port no", port);
})