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
        console.log(this.state)
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
            .then(data => {return data.json()})
            .then(res => {
                if(res === true) {
                    window.location.href = "/dashboard";
                }else {
                    alert(res.message)
                }
            })
            .catch(err => console.log(err));

    };

    render() {
        return(
            <div className = "form" >
                <div className="formCont">
                    <h2>Login</h2>
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                            value={this.state.userName}
                            name="userName" 
                            type="text" 
                            onChange={this.handleInputChange}
                            placeholder="User Name"
                            required />

                            <label htmlFor="userName">Username</label>
                        </div>
                        <div className="input-field col s6">
                            <input 
                            value={this.state.password}
                            name="password" 
                            type="password" 
                            onChange={this.handleInputChange}
                            placeholder="Password"
                            required />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleFormSubmit}>Submit <i className="material-icons right">send</i></button>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;