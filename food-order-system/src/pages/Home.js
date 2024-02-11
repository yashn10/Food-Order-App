import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';


export default function Home() {

    const [food, setfood] = useState([]);

    const response = async () => {
        let response = await fetch("https://food-order-app-ukhn.onrender.com/food", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        response = await response.json();

        setfood(response);
    }

    useEffect(() => {
        response()
    }, [])


    return (
        <div>
            <Navbar />

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ "padding-top": "4%" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1500x500/?samosa" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1500x500/?noodles" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1500x500/?dosa" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className='container mt-5'>
                <div className="row">
                    {
                        food.map((data) => {
                            return (
                                <div className="col-lg-3 mb-3 mb-sm-0">
                                    <div className="card">
                                        <img src={data.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{data.title}</h5>
                                            <hr />
                                            <p className="card-text">{data.desc}</p>
                                            <a href="#" className="btn btn-success">Order now</a>
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
