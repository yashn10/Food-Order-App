import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Navigate } from 'react-router-dom';


export default function Signup() {

  const [user, newuser] = useState({
    name: "", email: "", phone: "", password: ""
  });

  const handleinputs = (e) => {
    const name = e.target.name
    const value = e.target.value

    newuser({ ...user, [name]: value });
  }

  const response = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = user;

    try {
      const response = await fetch('https://food-order-app-ukhn.onrender.com/user', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, password
        })
      })

      const json = await response.json();

      if (json) {
        console.log('User registered successfully');
        window.alert('Registration successfull');
      } else {
        console.log('Error not registerd');
        window.alert('Error during signup');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred');
    }

  }


  return (

    <div>

      <Navbar />

      <div className="container" style={{ "padding-top": "8%", "width": "60%" }}>

        <h2 style={{ "text-align": "center", "marginBottom": "20px" }}>Signup Here</h2>
        <hr />

        <form method='POST'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={user.name} onChange={handleinputs}
              aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={user.name} onChange={handleinputs}
              aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputContact1" className="form-label">Contact</label>
            <input type="number" className="form-control" name="phone" value={user.phone} onChange={handleinputs} id="exampleInputContact1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputContact1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={user.phone} onChange={handleinputs} id="exampleInputContact1" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={response}>Submit</button>
          </div>
        </form>

      </div>

    </div >

  )

}
