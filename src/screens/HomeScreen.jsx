import React from "react";
import "../css/screens/HomeScreen.css"
import homeBackground from "../images/background/homeBackground.jpg";
import volunteer from "../images/background/volunteer.jpg";
import trackstar from "../images/background/trackstar.jpg";
import email from "../images/logo/email.png";
import github from "../images/logo/github.png";
import linkedin from "../images/logo/linkedin.png";
import { Container, Row, Col } from 'react-bootstrap';
import SingleProject from "../components/SingleProject";
import acac from "../images/background/acac.jpg";
import Typewriter from "typewriter-effect";
import curbc from "../images/background/curbc.jpg";
import OpeningAnimation from "../components/OpeningAnimation.jsx";

// import haohao from "../images/people/haohao.jpg"

const HomeScreen = () => {

    const logos = [email, github, linkedin]

    return (
        <div className="page">
            <div className="mastHead-container">
                {/* <img alt="home background!" src={homeBackground} className="mast-cover" /> */}
                <div className="mastHead">
                    <div className="mast-details">
                        {/* <img src={haohao} style={{ width: "20%", height: "auto", borderRadius: "25" }} alt="" /> */}

                        <h1>Hi, I'm HaoHao.</h1>
                        <strong style={{ textAlign: "center" }}>
                            {/* <OpeningAnimation /> */}
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.changeDelay(0.2)
                                }}
                                options={{
                                    strings: ["Software Developer", "Sports Enthusiast", "BucketList Hunter", "Entrepeneur"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            {/* <p>Welcome to my portfolio.</p> */}
                        </strong>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
                            {logos.map((logo, i) => {
                                let marginRight = i === logos.length - 1 ? 0 : 25;
                                return <img style={{ marginRight: marginRight, height: 25, width: 25 }} src={logo} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects">
                <Container fluid>
                    <Row style={{ height: "300px" }}>
                        <Col className="mt-1 mr-0">
                            <SingleProject title="iContribute" photo={volunteer} roles="Founder and Tech Lead" />
                        </Col>
                        <Col className="mt-1 ml-1">
                            <SingleProject title="Trackstar" photo={trackstar} roles="Mobile Developer" />
                        </Col>
                    </Row>
                    <Row style={{ height: "300px" }}>
                        <Col className="mt-1 mr-0">
                            <SingleProject title="ACAC" photo={acac} roles="Web Designer and Developer" />
                        </Col>
                        <Col className="mt-1 ml-1">
                            <SingleProject title="CuHacking 2020" photo={curbc} roles="Backend Developer" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default HomeScreen;