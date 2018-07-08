import React from "react";
import "./Navbar.css";

const Navbar = (props) =>
    <nav id="navbar"className="navbar navbar-default">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li className="brand animated lightSpeedIn">
                    <a href="/Milky Way Memory Click" id="title">{props.title}</a>
                </li>
                <li id="rightWrong">{props.rightWrong}
                </li>
                <li id="currentScore">Current Score: {props.score}</li>
                <li id="topScore">Top Score: {props.topScore}</li>
            </ul>
        </div>
    </nav>;

export default Navbar;
