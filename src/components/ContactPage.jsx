import React from 'react'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function ContactPage() {

  useEffect(() => {
    Aos.init({duration: 3000});
    setTimeout(() => {
      Aos.refresh();
    }, 100);
  }, []);


  return (
  <div className="contact-container">
        <div className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>

      
      <div className="contact-wrapper" id="contact-wrap">
        <div data-aos="fade-down" className="contact-left" id="cont-left">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45717.24045802355!2d15.151273800028598!3d44.26208094207147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47621e48291456d3%3A0xaadb64bf7fa05b76!2sMletak%2C%2023233%2C%20Privlaka!5e0!3m2!1shr!2shr!4v1661112864923!5m2!1shr!2shr" width="600" height="450" referrerpolicy="no-referrer-when-downgrade">     </iframe>
        </div>
        <div data-aos="fade-up" className="contact-right" id="cont-right">
          <h1 data-aos="fade-up" className="reveal fade-bottom" id="contact-title">Email us</h1>
          <input data-aos="fade-left" className="reveal fade-left" placeholder="Full name" id="full-name" />
          <input data-aos="fade-right" className="reveal fade-right" placeholder="Email for info" id="email" />
          <input data-aos="fade-left" className="reveal fade-left" placeholder="Message" id="message" />
          <button data-aos="zoom-in" name="submit contact form" class="submit-contact reveal grow" onclick="pickEmail()">
            Submit
          </button>
          <h2 className="reveal opacity-anim">Bazirano u: Privlaka, Hrvatska</h2>
          <h2 className="reveal fade-bottom">@Copyright Gladi i Gradi d.o.o 2023</h2>
        </div>
      </div>
  </div>
  )
}