import React, { useEffect } from 'react'
import '../styles/style.css'
import MyImage from '../images/pogled I2.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Slika from '../images/homescreenfour.webp'

export default function HomePage() {

  useEffect(() => {
    Aos.init({duration: 500});
    setTimeout(() => {
      Aos.refresh();
    }, 100);
  }, []);



  return (
    <>
    <div className="page-container">
      <img className="main-img" src={MyImage} alt="image that shows houses" />
      <h1 className="title">Gladi i Gradi d.o.o</h1>
      <div className="button-container">
        <button data-aos="fade-up-right"><Link className="button-link" to="Properties">Pogledajte projekte</Link></button>
      </div>
      <p data-aos="fade-up-left" className="home-paragraph">
      Gladi i gradi d.o.o. je tvrtka nastala udruživanjem Gorana Sutona, vlasnika tvrtke Suton na bregu d.o.o. i Dina Jankovića, vlasnika tvrtke Altius d.o.o.
      </p>
      <h1 data-aos="fade-up" className="cp-title">Trenutni projekti</h1>
      <div className="border-bottom"></div>
      <div data-aos="fade-left" className="image-container">
        <img className="img-in-container" src={Slika} alt="Current Project Image" />
        <p data-aos="fade-right" className="description">Pogledajte više</p>
      </div>
    <footer className="footer-main">
      <p className="text-footer">Adresa: neka adresa | Kontakt broj: +385 91 433 3211</p>
      <p className="text-footer">@Copyright Gladi i Gradi d.o.o 2023</p>
    </footer>
    </div>
    </>
  )
}
