const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({

    image: {
        type: String,
        require: true
    },

    title: {
        type: String,
        require: true
    },

    desc: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true
    }

})


const Food = mongoose.model("Food", foodSchema);

module.exports = Food;