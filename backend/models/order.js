const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        require: true
    },

    orders: {
        type: Array,
        require: true
    }

})


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
