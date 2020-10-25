import React from "react";
import "../css/screens/HomeScreen.css"
import OpeningAnimation from "../components/OpeningAnimation.jsx";
import homeBackground from "../images/background/homeBackground.jpg";
import { Container, Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <div className="page">
            <div style={{ height: "50%" }}>
                <div className="mastHead">
                    <h1>Hello, I'm HaoHao.</h1>
                    <p>Welcome to my portfolio</p>
                    {/* <div style={{ position: "absolute" }}>
                        <img className="homeBackground" src={homeBackground} />
                    </div> */}
                </div>
            </div>
            <div className="projects">
                <Container>
                    <Row>
                        <Col>1 of 1</Col>
                    </Row>
                </Container>
                <div className="single-project">
                    <div className="title">
                        iContribute
                    </div>
                    <div className="subTitle">
                        Founder, Tech Lead
                    </div>
                </div>
            </div>
            {/* <OpeningAnimation /> */}
        </div>
    )
}

export default HomeScreen;