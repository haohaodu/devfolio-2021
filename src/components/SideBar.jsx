import React from "react";
import "../css/components/SideBar.css";

const SideBar = (props) => {
    return (
        <div className="sidebar-container">
            <h2>HaoHao Du</h2>
            <a href="/"><strong>Home</strong></a>
            <a href="/project"><strong>Projects</strong></a>
            <a href="/cuHacking">CuHacking 2020</a>
        </div>
    )
}

export default SideBar