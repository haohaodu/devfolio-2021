import React from "react";
import "../../css/screens/projects/icontribute.css"
import collage from "../../images/images/icontribute/collage.png";
import volunteer from "../../images/background/volunteer.jpg";

const iContribute = () => { 
    return (
        <div className="icontribute-page">
            <h1>iContribute</h1>
            <p>Product Founder and Tech Lead</p>
            <div style={{width: "100%", height: "20%"}}>
                <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={volunteer} />
            </div>
            <p>This is how we came to be</p>
            <p>This is how we made sure to have fun too!</p>
            <div style={{position:"relative", width: "100%", height: "auto"}}>
                <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={collage} />
            </div>
        </div>
    )
}

export default iContribute;