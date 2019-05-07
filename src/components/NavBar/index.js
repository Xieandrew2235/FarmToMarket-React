import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Icon, Container } from 'react-materialize';

import API from '../../utils/API'

class NavBar extends Component {
    
    handleLogout = () => {
        API.logoutUser()
        .then(data => {return data.json()})
        .then(response =>{
            if(!response) {
                window.location.href = "/";
            }
        })
        .catch(err=>console.log(err))
    }

    userNav = () => {
        return (
            <nav>
            <Container>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">FVRMK: Farmer to Market</a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">
                        <li>Home</li>
                    </Link></li>
                    <li>
                    <Button onClick={this.handleLogout}>Logout</Button></li>
                </ul>
            </div>
            </Container>
        </nav>
        )
    }

    guestNav = () => {
        return(
            <nav>
                <Container>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">FVRMK: Farmer to Market</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/login">
                            Login<i className="material-icons right">account_circle</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            Registration<i className="material-icons right">account_circle</i>
                        </Link>
                    </li>
                </ul>
            </div>
            </Container>
        </nav>
        )
    }

   render(){
     return (this.props.authenticated)? this.userNav() : this.guestNav()
   }
    
}

export default NavBar;