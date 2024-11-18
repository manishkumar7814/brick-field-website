import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nhwamwm', 'template_2m0mf5g', e.target, 'L1fEMVArXZ9eD3PtO')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('An error occurred, please try again.');
      });
    e.target.reset();
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        Have any questions? Feel free to reach out to us or visit our brick field location.
      </p>
      <div className="contact-details">
        <p><strong>Address:</strong> Sonakhali, Basanti, South 24 Paragnas, West Bengal - 743312</p>
        <p><strong>Phone:</strong> 8910515541</p>
        <p><strong>Email:</strong> hwymanishkumar@gmail.com</p>
      </div>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
        <input type="phone" name="phone" placeholder="Your Mobile" required onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange} />
        <button type="submit">Send Message</button>
      </form>

      <div className="map-container">
        <h1> </h1>
        <iframe
          title="Brick Field Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d461.72654336791624!2d88.70558638169587!3d22.209236649889863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731811735471!5m2!1sen!2sin"
          width="80%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
