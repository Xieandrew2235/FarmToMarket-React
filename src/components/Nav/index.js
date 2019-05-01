import React from 'react'

function NavBar (){
    return (
        <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Project 3</a>
            <ul className="right hide-on-med-and-down">
                <li><a className="waves-effect waves-light btn">Login<i
                            className="material-icons right">account_circle</i></a></li>
                <li><a className="waves-effect waves-light btn">Register<i
                            className="material-icons right">account_circle</i></a></li>

            </ul>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="sass.html">Home</a></li>
                <li><a href="badges.html">Account</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;