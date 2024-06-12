import React, { useState } from 'react'
import { useRouter } from 'next/router';


const login = () => {

    const router = useRouter();

    const [user, loginuser] = useState({
        email: "", password: ""
    })
    const [loading, setLoading] = useState(false);

    const handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value

        loginuser({ ...user, [name]: value });
    }

    const submit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const { email, password } = user;

        try {
            const response = await fetch('https://food-order-app-ukhn.onrender.com/login', {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })

            const json = await response.json();

            if (json.success) {
                console.log('User signin successfully');
                window.alert('Login successfull');
                localStorage.setItem("authToken", json.token);
                router.push('/order');
                console.log("Token:", localStorage.getItem("authToken"));
                // dispatch({ type: 'USER', payload: true })
            } else {
                console.log('Invalid credentials');
                window.alert('Invalid credentials');
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
                        <h1 className="contact_taital">Login Here</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="mail_section_1" method='post'>
                                <input type="email" className="mail_text" placeholder="Your Email" name="email" onChange={handleinput} value={user.email} />
                                <input type="password" className="mail_text" placeholder="Your Password" name="password" onChange={handleinput} value={user.password} />

                                <div className="send_bt"><a href="" type='submit' onClick={submit} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default login