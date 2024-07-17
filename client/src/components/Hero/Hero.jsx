import React from "react";
import Container from "react-bootstrap/Container";
import VideoImg from "../../assets/Video.png";
import Nav from "../Navbar/Nav.jsx";
import "./Hero.css";

const Hero = () => {
  return (
    <Container fluid className="p-0">
      <Nav />
      <img
        src={VideoImg}
        alt="Hero"
        className="hero-image"
      />
      <div className="hero-text">
        <p>The greatest movie of all time</p>
        <h2>Avengers <br/> The End Game</h2>
        <p>Premier on 01.11.2020</p>
      </div>
    </Container>
  );
};

export default Hero;
