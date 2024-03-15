import { React, useState } from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/Logo.svg'
import soundOne from '../assets/img/soundOne.png'
import { Link, animateScroll as scroll} from 'react-scroll'

export default function Header(){
    const [fix, setFix] = useState(false)
    function setFixed(){
                if(window.scrollY >= 392){
                    setFix(true)
                }else{
                    setFix(false)
                }
            }
            window.addEventListener("scroll", setFixed)
         return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="Vcat"  spy={true} smooth={true} offset={50} duration={500} >Vcat</Link>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >How to buy</Link>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Tokenomics</Link>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Vibe</Link>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Roadmap</Link>
                    </Nav>
                    <a href="/" className='base-btn d-flex align-items-center gap-2'> <img src={soundOne} alt="" /> On</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}