import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function LoginForm () {
    return (
        <div className= "form">
            <div className="formCont">
            <h2 center>Login</h2>
            <div className = "row">
            <div className="input-field col s6">
            <input id="name" type="text" required />
            <label htmlFor="name">Username</label>
            </div>
            <div className="input-field col s6">
            <input id="address" type="text" required />
            <label htmlFor="address">Password</label>
            </div>
            <Link to="/dashboard"><button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
            </button>
            </Link>
            </div>
            </div>
            </div>
    )
}

export default LoginForm;