import React, { useState } from 'react'

const contact = () => {

  const [contacts, setcontacts] = useState({
    name: "", phone: "", desc: ""
  })

  const handleinput = (e) => {
    setcontacts({ ...contacts, [e.target.name]: e.target.value })
  }

  const response = async (e) => {
    e.preventDefault()

    const { name, phone, desc } = contacts;

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

    <div className="contact_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="contact_taital">Get In Touch</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="contact_section_2">
          <div className="row">
            <div className="col-md-12">

              <form className="mail_section_1" method='post'>
                <input type="text" className="mail_text" placeholder="Your Name" name="name" onChange={handleinput} value={contacts.name} />
                <input type="number" className="mail_text" placeholder="Your Phone" name="phone" onChange={handleinput} value={contacts.phone} />
                <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="desc" onChange={handleinput} value={contacts.desc}></textarea>
                <div className="send_bt"><a href="" type='submit' onClick={response}>Send</a></div>
              </form>

            </div>
            <div className="map_main">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="250" height="500" frameBorder="0" style={{ border: 0, width: "100%" }} allowFullScreen=""></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default contact