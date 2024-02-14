import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';


const Order = () => {

    const [food, setfood] = useState([])

    const response = async () => {
        const response = await fetch('http://localhost:7000/food', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json();

        setfood(json);
    }

    useEffect(() => {
        response()
    })


    return (

        <div>
            <Navbar />

            <div className='container' style={{ "paddingTop": "8%" }}>
                <div className="row">
                    {
                        food.map((data) => {
                            return (
                                <div key={data._id} className="col-lg-3 mb-3 mb-sm-0">
                                    <div className="card">
                                        <img src={data.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{data.title}</h5>
                                            <hr />
                                            <p className="card-text">{data.desc}</p>
                                            <a href="#" className="btn btn-success" style={{ "float": "left" }}>Order now</a>
                                            <a href="#" className="btn btn-primary" style={{ "float": "right" }}>Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )

}

export default Order
