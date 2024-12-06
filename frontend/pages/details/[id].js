import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const OrderDetail = () => {

    const router = useRouter();
    const { id } = router.query;
    const [food, setfood] = useState();
    const [cartitem, setcartitem] = useState();


    useEffect(() => {
        if (id) {
            const fetchItem = async () => {
                const response = await fetch(`https://food-order-app-ukhn.onrender.com/food/${id}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const json = await response.json();
                setfood(json);
            };

            fetchItem();

            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            const item = cartItems.find((item) => item._id === id);

            if (item) {
                setcartitem(true);
            } else {
                setcartitem(false);
            }
        }
    }, [id]);


    const handleRemoveFromCart = () => {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems = cartItems.filter(item => item._id !== id);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        setcartitem(false);
        alert('Product removed from cart!');
    };

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cartItems.findIndex(item => item._id === food._id);
        if (existingProductIndex !== -1) {
            cartItems[existingProductIndex].quantity += 1;
        } else {
            cartItems.push({ ...food, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        setcartitem(true);
        alert('Product added to cart!');
    };


    if (!food) {
        return <div>Loading...</div>;
    }


    const Buttons = () => {
        if (cartitem) {
            return (
                <button className="readmore_btn" onClick={handleRemoveFromCart}><a>remove from cart</a></button>
            )
        } else {
            return (
                <button className="readmore_btn" onClick={handleAddToCart}><a>add to cart</a></button>
            )
        }
    }


    return (

        <div className="about_section layout_padding">
            <div className="container">
                <div className="about_section_2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_taital_box">
                                <h1 className="about_taital">About Our Product</h1>
                                <h1 className="about_taital_1">{food.title}</h1>
                                <p className=" about_text">{food.desc}</p>
                                <Buttons />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_iman"><img src={food.image} className="about_img" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default OrderDetail