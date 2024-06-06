import React, { useState, useEffect } from 'react'

const order = () => {

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
    response();
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


      <div class="blog_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="about_taital">Our Menu</h1>
            </div>
          </div>
          <div class="blog_section_2">
            <div class="row">
              {
                food.map((data) => {
                  return (
                    <div class="col-md-3" key={data._id}>
                      <div class="blog_box">
                        <div class="blog_img"><img src={data.image} /></div>
                        <h4 class="date_text">{data.price} INR</h4>
                        <h4 class="prep_text">{data.title}</h4>
                        <p class="lorem_text">{data.desc}</p>
                      </div>
                      <div class="read_btn"><a href="#">Read More</a></div>
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