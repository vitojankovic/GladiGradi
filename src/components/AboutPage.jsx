import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function AboutPage() {

  useEffect(() => {
    Aos.init({duration: 500});
    setTimeout(() => {
      Aos.refresh();
    }, 100);
  }, []);


  return (
      <div className="about-wrapper">
        <div className="text-wrapper">
          <h1 data-aos="fade-left" className="about-title">
            Gladi i Gradi d.o.o
          </h1>
          <p data-aos="fade-right"  className="text">
          Gladi i gradi d.o.o. je tvrtka nastala udruživanjem Gorana Sutona, vlasnika tvrtke Suton na bregu d.o.o. i Dina Jankovića, vlasnika tvrtke Altius d.o.o.
          </p>


          <h1 data-aos="fade-left" className="about-title">
            Goran Suton
          </h1>
          <p data-aos="fade-right" className="text">
          Goran Suton diplomirani je inženjer građevinarstva sa dugogodišnjim iskustvom u stanogradnji.  Kroz tridesetogodišnju karijeru, bavio se izgradnjom stambenih zgrada u Zagrebu te luksuznih kuća uz obalu Jadranskog mora.  Nakon što se osamostalio, njegov građevinski opus može se vidjeti na stranici sutonabregu.hr
          </p>

 
          <h1 data-aos="fade-left" className="about-title">
            Dino Janković
          </h1>
          <p data-aos="fade-right" className="text">
          Nakon devetogodišnjeg iskustva direktora riznice u Erste banci, Dino Janković posljednjih 20-ak godina radi kao financijski direktor i financijski savjetnik farmaceutske kompanije Grunenthal GmbH (koju je kasnije preuzela Stada GmbH).  Paralelno ulaže sredstva i obavlja financijske transakcije kroz vlastitu tvrtku, Altius d.o.o.
          </p>


          <h1 data-aos="fade-left" className="about-title">
            Partnerstvo
          </h1>
          <p data-aos="fade-right" className="text">
          Dino i Goran dugogodišnji su prijatelji koje je prvobitno zbližila ljubav prema košarci, a potom i međusobno poštovanje, korektnost, pouzdanost te ugled kojeg su obojica stjecala tijekom svojih poslovnih karijera.
          </p>
 
          <h1 data-aos="fade-left" className="about-title">
            Nešto
          </h1>
          <p data-aos="fade-right" className="text">
          Znanje, upornost, inovativnost i pedantnost samo su neke od vrlina koje su obilježile njihove uspješne, dugogodišnje karijere.  Njihova poslovna simbioza kroz tvrtku Gladi i gradi d.o.o. recept su za odličan proizvod i garancija kvalitete i zadovoljstva svakom potencijalnom kupcu njihove nekretnine.
          </p>

          </div>
    </div>
  )
}
