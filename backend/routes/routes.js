const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const Contact = require('../models/contact');
const User = require('../models/user');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');


router.get("/food", async (req, res) => {
    try {
        const foods = await Food.find();
        res.send(foods);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Internal server error" });
    }
})


router.post("/contact", async (req, res) => {

    const { name, phone, desc } = req.body;

    if (!name || !phone || !desc) {
        return res.status(400).json({ error: "please fill all the fields" });
    } else {

        try {
            const contacts = new Contact({ name, phone, desc });
            const saved = await contacts.save();

            if (saved) {
                return res.status(201).json({ message: "message submitted successfully" });
            } else {
                return res.status(404).json({ error: "error occurs" });
            }
        } catch (error) {
            console.log("error", error);
            return res.status(500).json({ error: "Internal server error" });
        }

    }

})


router.post("/user", async (req, res) => {
    let success = false
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({ success, error: "please fill all the fields properly" });
    } else {
        try {
            const userexist = await User.findOne({ email });
            if (userexist) {
                return res.status(401).json({ success, message: "User already exists with same email" });
            } else {
                const user = new User({ name, email, phone, password });
                const saved = await user.save();

                if (saved) {
                    success = true
                    return res.status(201).json({ success, message: "User registered successfully" });
                } else {
                    success = false
                    return res.status(404).json({ success, error: "User registration failed" });
                }
            }
        } catch (error) {
            console.log("error", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
})


router.post("/login", async (req, res) => {
    let success = false
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success, error: "please fill all the fields properly" });
    } else {
        const userexist = await User.findOne({ email: email });

        if (!userexist) {
            return res.status(401).json({ success, error: "Invalid credentials" });
        } else {
            try {
                const ismatch = await bcrypt.compare(password, userexist.password);
                const token = await userexist.generateAuthToken();
                // console.log(token);

                res.cookie("token hai", token, {
                    expires: new Date(Date.now() + 172800000),
                    httpOnly: true,
                    // secure: true  // Set this if your site uses HTTPS
                });

                if (ismatch) {
                    success = true
                    return res.status(201).json({ success, token, message: "User login successfully" });
                } else {
                    success = false
                    return res.status(404).json({ success, error: "Invalid credentials" });
                }
            } catch (error) {
                console.log("error", error);
                return res.status(500).json({ success, error: "Internal server error" });
            }
        }
    }
})


router.post("/order", async (req, res) => {
    let success = true
    try {
        const { email, order } = req.body;

        const emailexists = await Order.findOne({ email: email });

        if (!emailexists) {
            try {
                const user = new Order({ email, order });
                const saved = await user.save();
                if (saved) {
                    return res.status(201).json({ success, message: "order placed successfully" });
                } else {
                    success = false
                    return res.status(404).json({ success, error: "error occurs" });
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                await Order.findOneAndUpdate({ email: email },
                    {
                        $push: { data }
                    }).then(() => {
                        success = true
                        return res.status(201).json({ success, message: "order placed successfully" });
                    }).catch((error) => {
                        success = false
                        return res.status(404).json({ success, error: error });
                    })
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error);
    }
})


// router.get("/logout", async (req, res) => {
//     res.clearCookie("token hai");
//     res.status(201).send("User logout successfully");
// })


module.exports = router;
