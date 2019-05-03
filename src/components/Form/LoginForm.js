import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API'
// import "./Login.css";

class LoginForm extends Component {

    state = {
        userName: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();


        const userData = {
            userName: this.state.userName,
            password: this.state.password
        }

        // Add a new method to utils/API - call it loginUser. This method should make an axios POST request to http://localhost:3001/auth/signin and look like this -> return axios.post("http://localhost:3001/auth/signin", userData);
        API.loginUser(userData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return(
            <div className = "form" >
                <div className="formCont">
                    <h2 center>Login</h2>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="userName" name="userName" type="text" required />
                            <label htmlFor="userName">Username</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password" name="password" type="password" required />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button class="btn waves-effect waves-light" type="submit" name="action">
                            <Link to="/dashboard">
                                Submit
                                <i class="material-icons right">send</i>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;