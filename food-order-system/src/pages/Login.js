import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Navigate } from 'react-router-dom'


export default function Login() {

    const [user, loginuser] = useState({
        email: "", password: ""
    })

    const handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value

        loginuser({ ...user, [name]: value });
    }

    const submit = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        try {
            const response = await fetch('https://food-order-app-ukhn.onrender.com/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })

            const json = await response.json();

            if (json) {
                console.log('User signin successfully');
                window.alert('Login successfull');
                Navigate('/')
            } else {
                console.log('Error not signin');
                window.alert('Error during signin');
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert('An error occurred');
        }
    }


    return (

        <div>

            <Navbar />

            <div className="container" style={{ "padding-top": "8%", "width": "50%" }}>

                <h2 className='text-center'>Login Here</h2>
                <hr />

                <form action="/login" method="post">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleinput} value={user.email}
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputContact1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onChange={handleinput} value={user.password} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" onClick={submit}>Login</button>
                    </div>
                </form>

            </div>

        </div>


    )

}
