import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ONESO from '../images/1S_ST-1/1S_ST-1_0priz.jpg'
import ONEST from '../images/1S_ST-1/1S_ST-1_1kat.jpg'
import TWOST from '../images/1S_ST-1/1S_ST-1_2kat.jpg'
import Container from 'react-bootstrap/Container';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';



export default function Properties() {

  useEffect(() => {
    Aos.init({duration: 750});
    setTimeout(() => {
      Aos.refresh();
    }, 100);
  }, []);



  return (
    <Container className="pics-container" fluid>


      <h1 data-aos="fade-left" className="house-title">Kuća 1</h1>


      <h2 data-aos="fade-right" className="flat-title">Stan 1</h2>

      <Carousel data-aos="fade-left" className="pics-carousel">
        <Carousel.Item>
          <img
            src={ONEST}
            alt="First slide"
            className="pics-pic d-block w-50"
          />
          <Carousel.Caption>
            <h3>Naslov 1.1</h3>
            <p>Opis 1.1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TWOST}
            alt="Second slide"
            className="pics-pic d-block w-50"
          />

          <Carousel.Caption>
            <h3>Naslov 1.2</h3>
            <p>Opis 1.2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ONESO}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />

          <Carousel.Caption>
            <h3>Naslov 1.3</h3>
            <p>Opis 1.3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 data-aos="fade-right" className="flat-title">Stan 2</h2>

      <Carousel data-aos="fade-left" className="pics-carousel">
        <Carousel.Item>
          <img
            src={ONEST}
            alt="First slide"
            className="pics-pic d-block w-50"
          />
          <Carousel.Caption>
            <h3>Naslov 2.1</h3>
            <p>Opis 2.1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TWOST}
            alt="Second slide"
            className="pics-pic d-block w-50"
          />

          <Carousel.Caption>
            <h3>Naslov 2.2</h3>
            <p>Opis 2.2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ONESO}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />

          <Carousel.Caption>
            <h3>Naslov 2.3</h3>
            <p>Opis 2.3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>





      <h1 data-aos="fade-left" className="house-title">Kuća 2</h1>

      <h2 data-aos="fade-right" className="flat-title">Stan 3</h2>

      <Carousel data-aos="fade-left" className="pics-carousel">
        <Carousel.Item>
          <img
            src={ONEST}
            alt="First slide"
            className="pics-pic d-block w-50"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Naslov 3.1</h3>
            <p>Opis 3.1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TWOST}
            alt="Second slide"
            className="pics-pic d-block w-50"
          />

          <Carousel.Caption className="carousel-caption">
            <h3>Naslov 3.2</h3>
            <p>Opis 3.2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ONESO}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />

          <Carousel.Caption className="carousel-caption">
            <h3>Naslov 3.3</h3>
            <p>Opis 3.3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <h2 data-aos="fade-right" className="flat-title">Stan 4</h2>

      <Carousel data-aos="fade-left" className="pics-carousel">
        <Carousel.Item>
          <img
            src={ONEST}
            alt="First slide"
            className="pics-pic d-block w-50"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Naslov 4.1</h3>
            <p>Opis 4.1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TWOST}
            alt="Second slide"
            className="pics-pic d-block w-50"
          />

          <Carousel.Caption className="carousel-caption">
            <h3>Naslov 4.2</h3>
            <p>Opis 4.2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ONESO}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />

          <Carousel.Caption className="carousel-caption">
            <h3>Naslov 4.3</h3>
            <p>Opis 4.3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </Container>
  )
}
