import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();
  // Check if running in the browser environment
  const isBrowser = typeof window !== 'undefined';
  // Initialize login status
  const login = isBrowser ? localStorage.getItem('authToken') : null;


  const logout = () => {
    localStorage.removeItem('authToken');
    window.alert("User logged out successfully");
    console.log("User logged out successfully");
    router.push('/');
  }


  const Navbarmenu = () => {
    if (login) {
      return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link href={"/order"}>Order</Link>
            </li>
            <li className="nav-item">
              <Link href={"/cart"}>Cart</Link>
            </li>
            <li className="nav-item">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="login_bt">
              <ul>
                <li><Link href={""} onClick={logout}><span className="user_icon"><i className="fa fa-user"
                  aria-hidden="true"></i></span>Logout</Link></li>
              </ul>
            </div>
          </form>
        </div>
      )

    } else {
      return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="login_bt">
              <ul>
                <li><Link href={"/login"}><span className="user_icon"><i className="fa fa-user"
                  aria-hidden="true"></i></span>Login</Link></li>
                <li><Link href={"/signup"}><span className="user_icon"><i className="fa fa-user"
                  aria-hidden="true"></i></span>Signup</Link></li>
              </ul>
            </div>
          </form>
        </div>
      )
    }

  }


  return (

    <div className="header_section">

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" href={"/"} style={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>Urban Eats</Link>
          {/* <a className="navbar-brand" href="index.html"><img src="images/logo.png" /></a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbarmenu />
        </nav>
      </div>

      <div className="banner_section layout_padding">
        <div className="container">
          <div id="banner_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-12">
                    <div className="banner_taital_main">
                      <h1 className="banner_taital">Coffee <br />Shop</h1>
                      <p className="banner_text">more-or-less normal distribution of letters, as opposed to using
                      </p>
                      <div className="btn_main">
                        <div className="about_bt active"><Link href={"/about"}>About Us</Link></div>
                        <div className="callnow_bt"><Link href={"/order"}>Order Now</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-12">
                    <div className="banner_taital_main">
                      <h1 className="banner_taital">Coffee <br />Shop</h1>
                      <p className="banner_text">more-or-less normal distribution of letters, as opposed to using
                      </p>
                      <div className="btn_main">
                        <div className="about_bt active"><Link href={"/about"}>About Us</Link></div>
                        <div className="callnow_bt"><Link href={"/order"}>Order Now</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-12">
                    <div className="banner_taital_main">
                      <h1 className="banner_taital">Coffee <br />Shop</h1>
                      <p className="banner_text">more-or-less normal distribution of letters, as opposed to using
                      </p>
                      <div className="btn_main">
                        <div className="about_bt active"><Link href={"/about"}>About Us</Link></div>
                        <div className="callnow_bt"><Link href={"/order"}>Order Now</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
              <i className="fa fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

    </div>

  )

}

export default Navbar