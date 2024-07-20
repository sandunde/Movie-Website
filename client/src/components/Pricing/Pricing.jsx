import React from 'react'
import "./Pricing.css"
import { Row, Col, Button, Accordion } from 'react-bootstrap'
import Img1 from "../../assets/Decoration.png"
import Img2 from "../../assets/event.png";
import Img3 from "../../assets/news.png"

const Pricing = () => {
  return (
    <div className='pricing' id='pricing'>
      <div className='pricing-title'>
        <h3>Flexible</h3>
        <h3 style={{ color: "blue" }}>Pricing & Plans</h3>
      </div>
      <div className='price-boxes'>
        <Row className='price-row'>
          <Col className="col" xs={12} md={3}>
            <div className='basic-box'>
              <h5 style={{ color: "blue" }}>BASIC</h5>
              <h4 style={{ fontWeight: "bold" }}>Free</h4>
              <br />
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr ></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <br />
              <p style={{ lineHeight: "10px", marginTop: "20px", fontSize: "10px" }}>Interdum et malesuada fames ac ante ipsum primis <br />in faucibus</p>
              <Button style={{ borderRadius: "20px", marginTop: "15px", fontSize: "10px", fontWeight: "bold" }}>CHOOSE PLAN</Button>
            </div>
          </Col>
          <Col className="col featured-col" xs={12} md={3}>
            <div className='featured-box'>
              <div className='featured-extra'>
                <h5 style={{ color: "blue" }}>BEST VALUE</h5>
                <h4 style={{ fontWeight: "bold" }}>24$</h4>
                <br />
              </div>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr ></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <br />
              <p style={{ lineHeight: "10px", marginTop: "20px", fontSize: "10px" }}>Interdum et malesuada fames ac ante ipsum primis <br />in faucibus</p>
              <Button style={{ borderRadius: "20px", marginTop: "15px", fontSize: "10px", fontWeight: "bold", backgroundColor: "#e91e63", border: "#e91e63" }}>CHOOSE PLAN</Button>
            </div>
          </Col>
          <Col className="col" xs={12} md={3}>
            <div className='basic-box'>
              <h5 style={{ color: "#e91e63" }}>PRO</h5>
              <h4 style={{ fontWeight: "bold" }}>54$</h4>
              <br />
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr ></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <br />
              <p style={{ lineHeight: "10px", marginTop: "20px", fontSize: "10px" }}>Interdum et malesuada fames ac ante ipsum primis <br />in faucibus</p>
              <Button style={{ borderRadius: "20px", marginTop: "15px", fontSize: "10px", fontWeight: "bold", backgroundColor: "#e91e63", border: "#e91e63" }}>CHOOSE PLAN</Button>
            </div>
          </Col>
          <Col className="col" xs={12} md={3}>
            <div className='basic-box'>
              <h5 style={{ color: "#e91e63" }}>ENTERPRISE</h5>
              <h4 style={{ fontWeight: "bold" }}>99$</h4>
              <br />
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr ></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <hr></hr>
              <p style={{ lineHeight: "10px" }}>Nam sollicitudin dignissim</p>
              <br />
              <p style={{ lineHeight: "10px", marginTop: "20px", fontSize: "10px" }}>Interdum et malesuada fames ac ante ipsum primis <br />in faucibus</p>
              <Button style={{ borderRadius: "20px", marginTop: "15px", fontSize: "10px", fontWeight: "bold", backgroundColor: "#e91e63", border: "#e91e63" }}>CHOOSE PLAN</Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className='speaker-container'>
        <Row className='row-speaker'>
          <Col xs={12} md={6}>
            <p>Vestibulum sit amet tortor sit amet <br /> libero lobortis semper at et odio.</p>
            <img src={Img1} style={{ height: "400px" }} alt="tell" />
          </Col>
          <Col className='accordion-tab'  xs={12} md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Pallenteque as bibendum tortor?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>In mi nulla, frigilla vestibulum?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Quisque lacinia purus ut libero?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Quisque ut metus sit amet augue?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Aellentesque ac bibendum tortor?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
      <div className='news'>
        <Row className='event-row'>
          <Col xs={12} md={6}>
            <div className='event-section'>
              <img src={Img2} alt='event' style={{ height: "150px" }} />
              <div className='event-content'>
                <h4 style={{color: "grey"}}>EVENT</h4>
                <p>Sed imperdirt enit ligula, vitae viverra justo porta vel. <br />viverra justo porta vel. Duis eget felis pretium mi sed,<br />bibendum, pretium mi sed, placerat</p>
                <p style={{color: "blue"}}>READ MORE</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='news-section'>
              <img src={Img3} alt='news' style={{ height: "150px" }} />
              <div className='news-content'>
                <h4 style={{color: "grey"}}>NEWS</h4>
                <p>Sed imperdirt enit ligula, vitae viverra justo porta vel.  <br />viverra justo porta vel. Duis eget felis pretium mi sed,<br />bibendum, pretium mi sed, placerat</p>
                <p style={{color: "blue"}}>READ MORE</p>
              </div>
            </div></Col>
        </Row>
      </div>
    </div>
  )
}

export default Pricing