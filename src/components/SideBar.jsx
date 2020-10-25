import React from "react";
import "../css/components/SideBar.css";

const SideBar = (props) => {
    return (
        <div className="sidebar-container">
            <h2>HaoHao Du</h2>
            <a href="/work"><strong>Work</strong></a>
            <a href="/projects"><strong>Projects</strong></a>
            <a href="/clubs"><strong>Extracurriculars</strong></a>
            <a href="/about"><strong>About Me</strong></a>
            <a href="/writing"><strong>Writing</strong></a>
        </div>
    )
}

export default SideBar