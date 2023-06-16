import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// 
import ONESO from '../images/1S_ST-1/1S_ST-1_0priz.jpg'
import ONEST from '../images/1S_ST-1/1S_ST-1_1kat.jpg'
import TWOST from '../images/1S_ST-1/1S_ST-1_2kat.jpg'
import ONEPV from '../images/1S_ST-1/1S_ST-1_povrs.jpg'

import TWOESO from '../images/1S_ST-2/1S_ST-2_0priz.jpg'
import TWOEST from '../images/1S_ST-2/1S_ST-2_1kat.jpg'
import THREEST from '../images/1S_ST-2/1S_ST-2_2kat.jpg'
import TWOPV from '../images/1S_ST-2/1S_ST-2_povrs.jpg'

import THREEESO from '../images/2J_ST-1/2J_ST-1_0priz.jpg'
import THREEEST from '../images/2J_ST-1/2J_ST-1_1kat.jpg'
import FOUREST from '../images/2J_ST-1/2J_ST-1_2kat.jpg'
import THREEPV from '../images/2J_ST-1/2J_ST-1_povrs.jpg'

import FOURESO from '../images/2J_ST-2/2J_ST-2_0priz.jpg'
import FOUREIST from '../images/2J_ST-2/2J_ST-2_1kat.jpg'
import FIVEEST from '../images/2J_ST-2/2J_ST-2_2kat.jpg'
import FIVEPV from '../images/2J_ST-2/2J_ST-2_povrs.jpg'

import SIT1 from '../images/SIT-1S_ST1.jpg'
import SIT2 from '../images/SIT-1S_ST2.jpg'
import SIT3 from '../images/SIT-2J_ST1.jpg'
import SIT4 from '../images/SIT-2J_ST2.jpg'

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


      <h1 data-aos="fade-left" className="house-title">Vila Dina</h1>


      <h2 data-aos="fade-right" className="flat-title">Stan 1</h2>

      <Carousel indicators={false} data-aos="fade-left" className="pics-carousel">
        <Carousel.Item>
          <img
            src={ONEST}
            alt="First slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TWOST}
            alt="Second slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ONESO}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ONEPV}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={SIT1}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
      </Carousel>

      <h2 data-aos="fade-right" className="flat-title">Stan 2</h2>

      <Carousel indicators={false}  data-aos="fade-left" className="pics-carousel">
        <Carousel.Item>
          <img
            src={TWOESO}
            alt="First slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TWOEST}
            alt="Second slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={THREEST}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TWOPV}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={SIT2}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
      </Carousel>





      <h1 data-aos="fade-left" className="house-title">Vila Laura</h1>

      <h2 data-aos="fade-right" className="flat-title">Stan 3</h2>

      <Carousel indicators={false}  data-aos="fade-left" className="pics-carousel">
        <Carousel.Item>
          <img
            src={THREEESO}
            alt="First slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={THREEEST}
            alt="Second slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={FOUREST}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={THREEPV}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={SIT3}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
      </Carousel>



      <h2 data-aos="fade-right" className="flat-title">Stan 4</h2>

      <Carousel indicators={false}  data-aos="fade-left" className="pics-carousel">
        <Carousel.Item>
          <img
            src={FOURESO}
            alt="First slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={FOUREIST}
            alt="Second slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={FIVEPV}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={SIT4}
            alt="Third slide"
            className="pics-pic d-block w-50"
          />
        </Carousel.Item>
      </Carousel>


    </Container>
  )
}
