import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li className="brand">
                <a href="/clickygame/"> {props.title} </a>
            </li>

            <li id="rw">{props.rightWrong}</li>

            <li id="cur-sco">Home {props.score}</li>

            <li id="top-sco">Welcome to our app! {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;