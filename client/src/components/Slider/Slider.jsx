import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Slider.css";
import { Button } from "react-bootstrap";
import Img1 from "../../assets/deadpool.jpg";
import Img2 from "../../assets/olympus.jpeg";
import Img3 from "../../assets/garfield.jpeg";

const slides = [
    {
        image: Img1,
        title: "Deadpool & Wolverine",
        rating: "★ ★ ★ ★ ★ 5.0 | 2h 13m",
        descrition: "Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.",
        trailerLink: "https://www.imdb.com/video/vi320390681/?playlistId=tt6263850&ref_=tt_pr_ov_vi",
        fullMovieLink: "https://www.imdb.com/title/tt6263850/"
    },
    {
        image: Img2,
        title: "Olympus Has Fallen",
        rating: "★ ★ ★ ☆ ☆ 4.0 | 1h 45m",
        descrition: "Secret Service agent Mike Banning finds himself trapped inside the White House in the wake of a terrorist attack and works with national security to rescue the President from his kidnappers.",
        trailerLink: "https://www.imdb.com/video/vi3461588761/?playlistId=tt2302755&ref_=tt_ov_vi",
        fullMovieLink: "https://www.imdb.com/title/tt2302755/?ref_=nv_sr_srsg_6_tt_5_nm_3_in_0_q_oly"
    },
    {
        image: Img3,
        title: "The Garfield Movie",
        rating: "★ ★ ★ ★ ☆ 4.5 | 2h 30m",
        descrition: "After Garfield's unexpected reunion with his long-lost father, ragged alley cat Vic, he and his canine friend Odie are forced from their perfectly pampered lives to join Vic on a risky heist.",
        trailerLink: "https://www.imdb.com/video/vi2040972825/?playlistId=tt5779228&ref_=tt_ov_vi",
        fullMovieLink: "https://www.imdb.com/title/tt5779228/?ref_=nv_sr_srsg_3_tt_4_nm_4_in_0_q_garfi"
    }
];
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }

    const { image, title, rating, descrition, trailerLink, fullMovieLink } = slides[currentSlide];

    return (
        <div className="slider-container">
            <div className="slider-class">
                <div className="left-arrow" onClick={prevSlide}>←</div>
                <Row className="custom-row"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    }}>
                    <Col className="left-col" sm={7}>
                        <p>Vivamus sit amet</p>
                        <h3 className="left-col-heading">
                            {title}
                        </h3>
                        <p className="rating">{rating}</p>
                        <p>
                            {descrition}
                        </p>
                        <p></p>
                        <p></p>
                        <div className="trailer-btn">
                            <a href={trailerLink} target="_blank">WATCH TRAILER</a>
                            <Button target="_blank" as="a" href={fullMovieLink}>WATCH FULL MOVIE</Button>
                        </div>
                    </Col>
                    <Col className="right-col" sm={5}>
                        <img
                            src={image}
                            style={{ height: "400px", borderRadius: "20px" }}
                            alt="Image1"
                        />
                    </Col>
                </Row>
                <div className="right-arrow" onClick={nextSlide}>→</div>
            </div>
        </div>
    );
};

export default Slider;
