import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Project 3</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/login">
                            Login<i className="material-icons right">account_circle</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/merchantregistration">
                            Registration<i className="material-icons right">account_circle</i>
                        </Link>
                    </li>
                </ul>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <li><a href="badges.html">Account</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;