import React from "react";

const SimpleProject = (props) => {
    return (
        <div className="single-project" >
            
            <a className="project-cover" href={props.route}>
                <img style={{width: "100%", height: "100%", objectFit: "cover"}} alt="project background" src={props.photo}  />
            </a>
            <div className={"project-details"}>
                <div className="project-title">
                    {props.title}
                </div>
                <div className="subTitle">
                    {props.roles}
                </div>
            </div>
        </div>
    )
}

export default SimpleProject;