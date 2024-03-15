import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import htitleImg from "../assets/img/HtitleImg.png";
import hsimg1 from "../assets/img/hsimg1.png";
import hsimg2 from "../assets/img/hsimg2.png";
import hsimg3 from "../assets/img/hsimg3.png";
import hsimg4 from "../assets/img/hsimg4.png";
export default function HowToBuy() {
  const title = "HOW TO BUY";
  const howToBuyData = [
    {
      img: hsimg1,
      hsTitle: "Create a wallet",
      hsDesc: "Download Phantom from the app store or google play store for free. Desktop users, download the Phantom Google Chrome extension",
    },
    {
      img: hsimg2,
      hsTitle: "Get Some Sol",
      hsDesc: "Have $SOL in your wallet to switch to $VCAT. If you dont have $SOL in your wallet you can buy directly on your wallet, transfer from another wallet, or buy on another exchange and transfer to your wallet.",
    },
    {
      img: hsimg3,
      hsTitle: "Connect a Wallet",
      hsDesc: "Connect to Raydium or Jupiter and in Google Chrome or on the browser inside your  Phantom app. Connect your wallet. Paste the VCAT token token address into search, select VCAT and conrm. When your wallet prompts you for a wallet signature, sign.",
    },
    {
      img: hsimg4,
      hsTitle: "VCat Token Address",
      hsDesc: "Download Phantom from the app store or google play store for free. Desktop users, download the Phantom Google Chrome extension",
    },
  ]
  return (
    <section className='howToBuy' id='howToBuy'>
        <Container>
            <Row>
                <Col>
                  <div className="section-title d-flex text-center">
                    <h2>{title}</h2>
                    <figure>
                      <img src={htitleImg} alt="" />
                    </figure>
                  </div>
                </Col>
            </Row>
            <Row>
              {howToBuyData.map((item, index)=>(
                <div className="hSingleItem d-flex" key={index}>
                  <figure className='sImg'>
                    <img src={item.img} alt="" />
                  </figure>
                  <div className="info">
                    <h3>{item.hsTitle}</h3>
                    <p>{item.hsDesc}</p>
                  </div>
                </div>
              ))}
              <Col>
              </Col>
            </Row>
        </Container>
    </section>
  )
}
