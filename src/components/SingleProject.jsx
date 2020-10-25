import React from "react";
import "../css/components/SingleProject.css"

const SimpleProject = (props) => {
    return (
        <div className="single-project" >

            <a className="project-cover" href={props.route}>
                <img className="project-photo" alt="project background" src={props.photo} />
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