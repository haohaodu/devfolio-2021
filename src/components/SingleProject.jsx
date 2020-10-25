import React from "react";

const SimpleProject = (props) => {
    return (
        <div className="single-project" >
            <img alt="project background" src={props.photo} className="project-cover" />
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