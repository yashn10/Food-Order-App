import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem('cart'));
        if (cartStorage) {
            setCart(cartStorage);
        }
    }, []);


    const removefromcart = (id) => {
        const updatedcart = cart.filter(items => items._id !== id);
        setCart(updatedcart);
        localStorage.setItem('cart', JSON.stringify(updatedcart));
    }


    if (!cart.length) {
        return <div style={{ "fontSize": "200%", "textAlign": "center" }}>Your cart is empty.</div>;
    }


    return (

        <div class="blog_section layout_padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="about_taital">Your Cart</h1>
                    </div>
                </div>
                <div class="blog_section_2">
                    <div class="row">
                        {
                            cart.map((data) => {
                                return (
                                    <div class="col-md-3" key={data._id}>
                                        <div class="blog_box">
                                            <div class="blog_img"><img src={data.image} /></div>
                                            <h4 class="date_text">{data.price} INR</h4>
                                            <h4 class="prep_text">{data.title}</h4>
                                            <p class="lorem_text">{data.desc}</p>
                                        </div>
                                        <div class="read_btn"><a href="">Order Now</a></div>
                                        <div class="read_btn" onClick={() => removefromcart(data._id)}><a href="">Remove Cart</a></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )

}

export default cart