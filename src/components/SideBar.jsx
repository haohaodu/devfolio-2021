import React from "react";
import "../css/components/SideBar.css";

const SideBar = (props) => {
    return (
        <div className="sidebar-container">
            <h2>HaoHao Du</h2>
            <a href="/">Home</a>
            <a href="/project">Projects</a>
        </div>
    )
}

export default SideBar