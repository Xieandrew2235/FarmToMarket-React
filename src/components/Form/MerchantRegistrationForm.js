import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import API from "../../utils/API";

class MerchantRegistrationForm extends Component {

    state = {
        userName: "",
        password: "",
        name: "",
        address: "",
        city: "",
        state: "",
        email: "",
        phone: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const newUser = {
            userName: this.state.userName,
            password: this.state.password,
            userType: this.state.name,
            zipcode: 123456789,
            city: this.state.city
        }

        API.registerNewUser(newUser)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="form">

                <div className="formCont">
                    <h2 center>Merchant Registration</h2>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="userName" type="text" name="userName" required onChange={this.handleInputChange} />
                            <label htmlFor="userName">Enter a username</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password" type="password" name="password" required onChange={this.handleInputChange} />
                            <label htmlFor="password">Enter your password</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="name" type="text" name="name" required onChange={this.handleInputChange} />
                            <label htmlFor="name">Enter your name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="address" type="text" name="address" required onChange={this.handleInputChange} />
                            <label htmlFor="address">Enter your address</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="city" type="text" name="city" required onChange={this.handleInputChange} />
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="state" type="text" name="state" required onChange={this.handleInputChange} />
                            <label htmlFor="state">State</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="text" name="email" required onChange={this.handleInputChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="phone" type="text" name="phone" required onChange={this.handleInputChange} />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            {/* Add a link, link-to for the submit button that redirects to dashboard */}
                            <Link to="/merchantdashboard">
                                <button class="btn waves-effect waves-light" onClick={this.handleFormSubmit} name="action">Submit
                <i class="material-icons right">send</i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MerchantRegistrationForm;