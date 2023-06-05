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
    <div className="about-container">
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
          Goran Suton je završio građevinski fakultet i duže od 30 godina se bavi izgradnjom stambenih jedinica i samostojećih zgrada. Nakon što se osamostalio, njegov građevinski opus se može vidjeti na stranici sutonnabregu.com
          </p>

 
          <h1 data-aos="fade-left" className="about-title">
            Dino Janković
          </h1>
          <p data-aos="fade-right" className="text">
          Dino Janković je prvo 9 godina bio direktor riznice u Erste banci, da bi zadnjih 20ak godina radio kao financijski direktor i financijski savjetnik u farmaceutskoj kompaniji Grunenthal GmbH (koju je kasnije preuzela Stada GmbH). Paralelno je Dino Janković ulagao sredstva i obavljao financijske transakcije kroz svoju tvrtku Altius d.o.o.
          </p>


          <h1 data-aos="fade-left" className="about-title">
            Partnerstvo
          </h1>
          <p data-aos="fade-right" className="text">
          Dino Janković i Goran Suton su višegodišnji prijatelji koje je najviše zbližila ljubav prema košarci, ali i međusobno poštovanje i ugled kojeg su obojica stjecala tijekom svoje višegodišnje karijere.
          </p>
 
          <h1 data-aos="fade-left" className="about-title">
            Hvaljenje
          </h1>
          <p data-aos="fade-right" className="text">
          Višegodišnje uspješne karijere Gorana i Dina mogu biti garancija svakom potencijalnom kupcu nekretnine od tvrtka Gladi i gradi d.o.o. da će dobiti odličan i pouzdan proizvod za svoje novce!
          </p>

          </div>
    </div>

      </div>
  )
}
