import React from "react";
import "../css/screens/ExtraScreen.css" 
import cusec from "../images/logo/cusec.png"
import db1 from "../images/images/extra-curricular/sports/dragon-boating/dragon-boat-one.jpg"
import acac from "../images/images/extra-curricular/acac.jpg";
import ReactPlayer from "react-player"

const ExtraScreen = () => {
    return (
    <div className="extra-page">
        Extracurriculars Screen 
        <div className="page-container">
            Asian Canadian Association of Carleton
            <img src={acac} className="club-one" />
        </div>
        <div className="page-container">
            <div className="db-container">
                <p>Carleton Dragonboating Team</p>
                <img src={db1} className="club-one" />
            </div>
        </div>
        <div className="page-container">
            <div className="db-container">
                <p>Sports Fail Videos!</p>
                <ReactPlayer className="club-one" url="https://www.youtube.com/watch?v=hEiO3vLguM4"/>
            </div>
        </div>

        
    </div>
    )
}

export default ExtraScreen; 