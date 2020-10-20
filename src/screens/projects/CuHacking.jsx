import React from "react";
import "../../css/screens/projects/CuHacking.css"
import curbc from "../../images/hackathons/curbc.jpg"

const CuHacking = () => {
    return (
        <div className="cuhacking-page">
            <h1>CuHacking 2020</h1>
            <img style={{ objectFit: "cover", width: "75%", height: "auto" }} src={curbc} />
        </div>)
}

export default CuHacking;