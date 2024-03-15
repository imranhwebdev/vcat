import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import tokenRimg from '../assets/img/tokenRimg.png';
export default function Tokenomics() {
  const title = "TOKENOMICS";
  const tstitle = "TOTAL SUPPLY";
  const tsvalue = "TOTAL SUPPLY";
  const orTitle = "OWNERSHIP RENOUNCED:";
  const orDesc = "Vibing Cat is a community driven. Just like with many other top  memes, dev sold his tokens, and left, but as you see, its for the  good.";
  return (
    <section className='tokenomics' id='tokenomics'>
        <Container>
            <Row>
                <Col>
                  <div className="section-title text-center">
                    <h2>{title}</h2>
                  </div>
                </Col>
            </Row>
            <Row className='align-items-center'>
              <Col lg={6}>
                <div className="tokenInfo">
                  <div className="singleItem">
                    <h5>{tstitle}</h5>
                    <h3>{tsvalue}</h3>
                  </div>
                  <div className="singleItem">
                    <h4>{orTitle}</h4>
                    <h3>{orDesc}</h3>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <figure>
                  <img src={tokenRimg} alt="" />
                </figure>
              </Col>
            </Row>
        </Container>
    </section>
  )
}
