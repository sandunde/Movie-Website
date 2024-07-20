import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import { Gear } from "react-bootstrap-icons";
import "./Navbar.css";

const CustomNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar expand="lg" fixed="top" className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}>
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    height="50"
                    className="d-inline-block align-top logo"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 justify-content-center align-items-center">
                    <Nav.Link href="#featured" className="text-white mx-2 featured-btn" onClick={(e) => handleScroll(e, "featured")}>
                        Featured
                    </Nav.Link>
                    <Nav.Link href="#link" className="text-white mx-2" onClick={(e) => handleScroll(e, "top-categories")}>
                        Top Categories
                    </Nav.Link>
                    <Nav.Link href="#link" className="text-white mx-2" onClick={(e) => handleScroll(e, "all-categories")}>
                        All Categories
                    </Nav.Link>
                    <Nav.Link href="#link" className="text-white mx-2" onClick={(e) => handleScroll(e, "pricing")}>
                        Pricing
                    </Nav.Link>
                    <span className="vertical-line mx-2"></span>
                    <Nav.Link href="/login" className="text-white mx-2">
                        LOGIN
                    </Nav.Link>
                    <Nav.Link href="/register" className="mx-2 register-btn">
                        REGISTER
                    </Nav.Link>
                    <Nav.Link href="#settings" className="text-white mx-2">
                        <Gear size={24} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
