import React from "react";
import "../../css/screens/projects/icontribute.css"
import collage from "../../images/images/icontribute/collage.png";
import volunteer from "../../images/background/volunteer.jpg";

const iContribute = () => {

    const monthDiff = (d1, d2) => {
        var months;
        months = (d1.getFullYear() - d2.getFullYear()) * 12;
        months -= d2.getMonth();
        months += d1.getMonth();
        return months <= 0 ? 0 : months;
    }


    const getCurrentMonth = () => {
        return (monthDiff(new Date(), new Date("April 1, 2020 11:10:00"))).toString()

    }

    return (
        <div className="icontribute-page">
            <h1>iContribute</h1>
            <div className="header-two">Product Founder and Tech Lead</div>
            <div className="image-container">
                <img className="image" src={volunteer} />
            </div>
            <div className="intro-container">
                <div className="intro-date">Duration: {getCurrentMonth()} Months (ongoing)</div>
                <div className="intro-text">
                    <div>Research Phase: HaoHao Du, Umai Balendra, James Ying</div>
                    <div>Design Phase: Carmen Lin</div>
                    <div>Development Phase: HaoHao Du, James Ying, Kirti Desai, Umang Srivastav, Alex Gold, Lydia Pitts </div>
                    <div>Maintenance Phase: HaoHao Du</div>
                </div>

            </div>
            <p>This is how we made sure to have fun too!</p>
            <div style={{ position: "relative", width: "100%", height: "auto" }}>
                <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={collage} />
            </div>
        </div>
    )
}

export default iContribute;