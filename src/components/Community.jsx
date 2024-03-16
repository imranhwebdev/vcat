import React from "react"
import { Col, Container, Row } from 'react-bootstrap';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import img1 from '../assets/img/gallery/galleryImg1.png';
import img2 from '../assets/img/gallery/galleryImg2.png';
import img3 from '../assets/img/gallery/galleryImg3.png';
import img4 from '../assets/img/gallery/galleryImg4.png';
import img5 from '../assets/img/gallery/galleryImg5.png';
import img6 from '../assets/img/gallery/galleryImg6.png';
import img7 from '../assets/img/gallery/galleryImg7.png';
import img8 from '../assets/img/gallery/galleryImg8.png';
import img9 from '../assets/img/gallery/galleryImg9.png';
import img10 from '../assets/img/gallery/galleryImg10.png';
import img11 from '../assets/img/gallery/galleryImg11.png';
import gtitleImg from '../assets/img/gtitleImg.png';
const images = [
  '../assets/img/gallery/galleryImg11.png/200',
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
]
export default function Tokenomics() {
  const titleImg = ""
  return (
    <section className="community" id="community">
      <Container>
        <Row>
          <Col md={7}>
            <div className="gallery-title">
              <div className="title-info">
                <h2>COMMUNITY </h2>
                <p>Join the Community and Vibe with us. Tag <b>@$VCAT</b> And <b> @VibingCatSolana</b> and vibe Vibing Cat on Socials. </p>
              </div>
              <figure>
                <img src={gtitleImg} alt=""/>
              </figure>
            </div>
          </Col>
          <Col md={5} className="text-end">
            <div className="gtitleRight">
              <h2>VIBES</h2>
              <p>The most active Vibing Cats will  receive some goodies now and then airdopped. Follow us and stay tuned!</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter="22px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
          </Col>
        </Row>
      </Container>
    </section> 
  );
}

