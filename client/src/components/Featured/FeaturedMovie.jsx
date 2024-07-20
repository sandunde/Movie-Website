import React from "react";
import "./Featured.css";
import Badge from "react-bootstrap/Badge";
import { Col, Row } from "react-bootstrap";
import Img4 from "../../assets/fast.jpeg";
import Img5 from "../../assets/after.jpg";
import Img6 from "../../assets/black.jpg";
import Img7 from "../../assets/left.png";
import Img8 from "../../assets/middle.png";
import Img9 from "../../assets/right.png";
import Img10 from "../../assets/awards.png";
import Img11 from "../../assets/animations.png";
import Img12 from "../../assets/actions.png";
import Img13 from "../../assets/comedy.png";
import Img14 from "../../assets/romance.png";
import Img15 from "../../assets/superhero.png";

const FeaturedMovie = () => {
    return (
        <div className="featured" id="featured">
            <div className="featured-container">
                <Row>
                    <Col className="text-col" xs={12} md={2}>
                        <h3>Featured</h3>
                        <h3 style={{ color: "blue" }}>Movies</h3>
                        <p>
                            Cras convallis lacus orci,
                            <br />
                            tristique tincidunt
                            <br />
                            magna consequat in.
                        </p>
                    </Col>
                    <Col className="img-thumbail" xs={12} md={10}>
                        <div style={{ position: "relative", display: "inline-block" }}>
                            <img src={Img4} alt="img1" style={{ height: "400px" }} />
                            <Badge
                                bg="secondary"
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    zIndex: 1,
                                    borderRadius: "20px",
                                }}
                            >
                                New
                            </Badge>
                            <div className="movie-main-title">
                                <h6 className="movie-title">Fast and Furious</h6>
                            </div>
                        </div>
                        <div style={{ position: "relative", display: "inline-block" }}>
                            <img src={Img5} alt="img1" style={{ height: "400px" }} />
                            <Badge
                                bg="secondary"
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    zIndex: 1,
                                    borderRadius: "20px",
                                }}
                            >
                                New
                            </Badge>
                            <div className="movie-main-title">
                                <h6 className="movie-title">After</h6>
                            </div>
                        </div>
                        <div style={{ position: "relative", display: "inline-block" }}>
                            <img src={Img6} alt="img1" style={{ height: "400px" }} />
                            <Badge
                                bg="secondary"
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    zIndex: 1,
                                    borderRadius: "20px",
                                }}
                            >
                                New
                            </Badge>
                            <div className="movie-main-title">
                                <h6 className="movie-title">Black Panther</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Row className="image-row">
                    <Col xs={12} md={3} className="col">
                        <img src={Img7} style={{ height: "350px" }} alt="1" />
                    </Col>
                    <Col xs={12} md={6} className="col">
                        <img src={Img8} style={{ height: "350px" }} alt="2" />
                    </Col>
                    <Col xs={12} md={3} className="col">
                        <img src={Img9} style={{ height: "350px" }} alt="3" />
                    </Col>
                </Row>
            </div>
            <div className="top-categories" id="top-categories">
                <Row>
                    <Col className="top-container" xs={12} md={6}>
                        <h3>Top</h3>
                        <h3 style={{ color: "blue" }}>Categories</h3>
                        <div className="action-col">
                            <img src={Img12} alt="e" style={{ height: "350px" }} />
                        </div>
                        <div className="romance-col">
                            <img src={Img14} alt="e" style={{ height: "200px" }} />
                            <img src={Img13} alt="e" style={{ height: "200px" }} />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="awards-col">
                            <img src={Img10} alt="w" style={{ height: "207px" }} />
                            <img src={Img11} alt="w" style={{ height: "207px" }} />
                        </div>
                        <div>
                            <img src={Img15} alt="w" style={{ height: "550px" }} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FeaturedMovie;
