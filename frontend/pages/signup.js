import React, { useState } from 'react'
import { useRouter } from 'next/router';


const signup = () => {

    const router = useRouter();

    const [user, newUser] = useState({
        name: "", email: "", phone: "", password: ""
    });

    const handleinputs = (e) => {

        newUser({ ...user, [e.target.name]: e.target.value });
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

            if (json.success) {
                console.log('User registered successfully');
                window.alert('Registration successfull');
                router.push('/login');
            } else {
                console.log('User already registered with same email');
                window.alert('User already registered with same email');
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert('An error occurred');
        }

    }


    return (

        <div className="contact_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="contact_taital">Register Here</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">

                            <form className="mail_section_1" method='post'>
                                <input type="text" className="mail_text" placeholder="Your Name" name="name" onChange={handleinputs} value={user.name} />
                                <input type="email" className="mail_text" placeholder="Your Email" name="email" onChange={handleinputs} value={user.email} />
                                <input type="number" className="mail_text" placeholder="Your Contact" name="phone" onChange={handleinputs} value={user.phone} />
                                <input type="password" className="mail_text" placeholder="Your Password" name="password" onChange={handleinputs} value={user.password} />

                                <div className="send_bt"><a href="" type='submit' onClick={response}>Register Here</a></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default signup