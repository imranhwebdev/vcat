import React from "react"
import { Col, Container, Row } from 'react-bootstrap';
import sectionShapDeep from "../assets/img/sectionShapDeep.png";
import gtitleImg from '../assets/img/gtitleImg.png';
import img1 from '../assets/img/gallery/VCAT1.png';
import img2 from '../assets/img/gallery/VCAT2.png';
import img3 from '../assets/img/gallery/VCAT3.png';
import img4 from '../assets/img/gallery/VCAT4.png';
import img5 from '../assets/img/gallery/VCAT5.png';
import img6 from '../assets/img/gallery/VCAT6.png';
import img7 from '../assets/img/gallery/VCAT7.png';
import img8 from '../assets/img/gallery/VCAT8.png';
import img9 from '../assets/img/gallery/VCAT9.png';
import img10 from '../assets/img/gallery/VCAT10.png';
import img11 from '../assets/img/gallery/VCAT11.png';
export default function Community() {
  return (
    <section className="community topShap" id="vibe">
    <figure className='sectionShap'>
      <img src={sectionShapDeep} alt="" />
    </figure>
      <Container>
        <Row>
          <Col>
            <div className="gallery-title d-flex">
              <div className="title-info">
                <h2>COMMUNITY </h2>
                <p>Join the Community and Vibe with us. Tag <b>$VCAT</b> And <b> @VibingCatSolana</b> and vibe Vibing Cat on Socials. </p>
              </div>
              <figure className="gtitleMImg">
                <img src={gtitleImg} alt=""/>
              </figure>
              <div className="gtitleRight text-md-end text-center">
                <h2>VIBES</h2>
                <p>The most active Vibing Cats will  receive some goodies now and then airdopped. Follow us and stay tuned!</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="grid-wrapper">
              <div className="img1">
                <img src={img1} alt="" />
              </div>
              <div className="img2">
              <img src={img2} alt="" />
              </div>
              <div  className="img3">
              <img src={img3} alt="" />
              </div>
              <div  className="img4">
              <img src={img4} alt="" />
              </div>
              <div  className="img5">
              <img src={img5} alt="" />
              </div>
              <div className="img6">
              <img src={img6} alt="" />
              </div>
              <div className="img7">
              <img src={img7} alt="" />
              </div>
              <div className="img8">
              <img src={img8} alt="" />
              </div>
              <div className="img9">
              <img src={img9} alt="" />
              </div>
              <div  className="img10">
              <img src={img10} alt="" />
              </div>
              <div  className="img11">
              <img src={img11} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section> 
  );
}

