import React from "react";
import "../css/screens/ExtraScreen.css" 
import cusec from "../images/logo/cusec.png"
import db1 from "../images/images/extra-curricular/sports/dragon-boating/dragon-boat-one.jpg"
import acac from "../images/images/extra-curricular/acac.jpg";

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
        <div>Carleton Tea Club</div>
        
        <div>Though I was only able to compete in one </div>
        <p><strong>Dropin Dance Classes !</strong></p>
        </div>

        
    </div>
    )
}

export default ExtraScreen; 