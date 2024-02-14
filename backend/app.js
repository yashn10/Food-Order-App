const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const routes = require('./routes/routes');
const port = process.env.PORT

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT");
//     res.header("Access-Control-Allow-Origin' 'http://localhost:7000' always");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

require('./db/db');
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // or an array of allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable credentials (cookies, authorization headers, etc.)
}));
app.use(routes);


app.listen(port, () => {
    console.log("app running on port no", port);
})