import React, { useState } from 'react'
import Navbar from '../components/Navbar'


export default function Contact() {

    const [message, newmessage] = useState({
        name: "", phone: "", desc: ""
    });

    const handleinputs = (e) => {
        const name = e.target.name
        const value = e.target.value

        newmessage({ ...message, [name]: value });
    }

    const response = async (e) => {
        e.preventDefault();

        const { name, phone, desc } = message;

        try {
            const response = await fetch('https://food-order-app-ukhn.onrender.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name, phone, desc
                }),
            });

            const res = await response.json();

            if (res) {
                console.log('Message submitted successfully');
                window.alert('Successfully submitted');
            } else {
                console.log('Error submitting message');
                window.alert('Error submitting message');
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

                <h2 style={{ "text-align": "center", "marginBottom": "20px" }}>Contact Us</h2>
                <hr />

                <form method='POST'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={message.name} onChange={handleinputs}
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputContact1" className="form-label">Contact</label>
                        <input type="number" className="form-control" name="phone" value={message.phone} onChange={handleinputs} id="exampleInputContact1" />
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Type your message here" name="desc" value={message.desc} onChange={handleinputs} id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Leave a comment here</label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" onClick={response}>Submit</button>
                    </div>
                </form>

            </div>

        </div >

    )
}
