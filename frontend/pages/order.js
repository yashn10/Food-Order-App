import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const order = () => {

  const [food, setfood] = useState([]);
  const [loggedin, setLoggedin] = useState(false);


  const response = async () => {
    const response = await fetch('https://food-order-app-ukhn.onrender.com/food', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })

    const json = await response.json();
    setfood(json);
  }


  const addToCart = (product) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('Please log in to add items to your cart.');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex((item) => item._id === product._id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };


  useEffect(() => {
    response();

    const token = localStorage.getItem('authToken');
    if (token) {
      setLoggedin(true);
    }
  }, [])


  return (

    <>

      <div className="coffee_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="coffee_taital">OUR Coffee OFFER</h1>
            </div>
          </div>
        </div>
        <div className="coffee_section_2">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-1.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">TYPES OF COFFEE</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-2.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">BEAN VARIETIES</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-3.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">COFFEE & PASTRY</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-4.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">COFFEE TO GO</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-1.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">TYPES OF COFFEE</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-2.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">BEAN VARIETIES</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-3.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">COFFEE & PASTRY</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-4.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">COFFEE TO GO</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-1.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">TYPES OF COFFEE</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-2.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">BEAN VARIETIES</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-3.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">COFFEE & PASTRY</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img"><img src="images/img-4.png" /></div>
                      <div className="coffee_box">
                        <h3 className="types_text">COFFEE TO GO</h3>
                        <p className="looking_text">looking at its layout. The point of</p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i className="fa fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>


      <div className="blog_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="about_taital">Our Menu</h1>
            </div>
          </div>
          <div className="blog_section_2">
            <div className="row">
              {
                food.map((data) => {
                  return (
                    <div className="col-md-3" key={data._id}>
                      <div className="blog_box">
                        <div className="blog_img"><img src={data.image} /></div>
                        <h4 className="date_text">{data.price} INR</h4>
                        <h4 className="prep_text">{data.title}</h4>
                        <p className="lorem_text">{data.desc}</p>
                      </div>
                      <div className="read_btn" onClick={() => addToCart(data)}><a href="#">Add to cart</a></div>
                      <div className="read_btn"><Link href={`/details/${data._id}`}>Read More</Link></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

    </>


  )

}

export default order