import React from "react";
import "../css/screens/HomeScreen.css"
import homeBackground from "../images/background/homeBackground.jpg";
import volunteer from "../images/background/volunteer.jpg";
import trackstar from "../images/background/trackstar.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import SingleProject from "../components/SingleProject";
import acac from "../images/background/acac.jpg"
import Typewriter from "typewriter-effect"
import OpeningAnimation from "../components/OpeningAnimation.jsx";
// import haohao from "../images/people/haohao.jpg"

const HomeScreen = () => {
    return (
        <div className="page">
            <div className="mastHead-container">
                {/* <img alt="home background!" src={homeBackground} className="mast-cover" /> */}
                <div className="mastHead">
                    <div className="mast-details">
                        {/* <img src={haohao} style={{ width: "20%", height: "auto", borderRadius: "25" }} alt="" /> */}
                        <h1>Hi, I'm HaoHao.</h1>
                        <strong>
                            {/* <OpeningAnimation /> */}
                            {/* <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.changeDelay(0.2)
                                }}
                                options={{
                                    strings: ["Software Developer", "Sports Enthusiast", "BucketList Hunter", "Entrepeneur"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /> */}
                            <p>Welcome to my portfolio.</p>
                        </strong>
                    </div>
                </div>
            </div>
            <div className="projects">
                <Container fluid>
                    <Row style={{ height: "300px" }}>
                        <Col className="mt-1 mr-1">
                            <SingleProject title="iContribute" photo={volunteer} roles="Founder and Tech Lead" />
                        </Col>
                        <Col className="mt-1 ml-1">
                            <SingleProject title="Trackstar" photo={trackstar} roles="Mobile Developer" />
                        </Col>
                    </Row>
                    <Row style={{ height: "300px" }}>
                        <Col className="mt-1 ml-1">
                            <SingleProject title="ACAC" photo={acac} roles="Web Designer and Developer" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default HomeScreen;