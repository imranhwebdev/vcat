import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from "../assets/img/aboutImg.png";
export default function About() {
  const title = "About VIBING <br> CAT";
  const desc = "VIBING CAT ISN'T JUST A SENSATION;  IT'S A PURR-FECT CULTURAL ICON,  THE BEACON OF POSITIVE VIBES AND  FELINE CHARM. JOIN OUR VIBRANT  COMMUNITY AND LET  THE GOOD VIBES ROLL.";
  return (
    <section className='about' id='about'>
        <Container>
            <Row>
                <Col lg={6}>
                  <figure className='aboutImg'>
                    <img src={aboutImg} alt="" />
                  </figure>
                </Col>
                <Col lg={6}>
                  <div className="aboutContent">
                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>  
                    <p>{desc}</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
