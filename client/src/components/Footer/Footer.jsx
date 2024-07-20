import React from 'react';
import "./Footer.css";
import { Button, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import Logo from "../../assets/Logo.png";
import Fb from "../../assets/facebook.png";
import In from "../../assets/insta.png";
import Li from "../../assets/linkedin.png";
import Tw from "../../assets/twitter.png";

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-content'>
                <h3>What are you waiting for?</h3>
                <Button style={{ borderRadius: "20px", padding: "5px 25px" }}>GET STARTED</Button>
            </div>
            <div className='footer-col'>
                <Row>
                    <Col xs={12} md={2}>
                        <img src={Logo} alt='sa' style={{ height: "70px" }} />
                        <p>© Luxi Theme 2020</p>
                    </Col>
                    <Col xs={12} md={2}>
                        <h6>COMPANY</h6>
                        <p>Donec dignissm</p>
                        <p>Curabitur egestas</p>
                        <p>Nam posuere</p>
                        <p>Aenean facilisis</p>
                    </Col>
                    <Col xs={12} md={2}>
                        <h6>SERVICES</h6>
                        <p>Cras convallis</p>
                        <p>Vestibulum faucibus</p>
                        <p>Quisque lacinia purus</p>
                        <p>Aliquam nec ex</p>
                    </Col>
                    <Col xs={12} md={2}>
                        <h6>LEGAL</h6>
                        <p>Suspendisse porttitor</p>
                        <p>Nam posuere</p>
                        <p>Curabitur egestas</p>
                    </Col>
                    <Col xs={12} md={4} className='social'>
                        <div className='footer-logo'>
                            <img src={Fb} alt='fb' />
                            <img src={In} alt='fb' />
                            <img src={Li} alt='fb' />
                            <img src={Tw} alt='fb' />
                        </div>
                        <DropdownButton title="🌐 English - En">
                            <Dropdown.Item>Sinhala - Sn</Dropdown.Item>
                            <Dropdown.Item>German - Gm</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
