import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import API from "../../utils/API";

class MerchantRegistrationForm extends Component {

    state = {
        userName: "",
        password: "",
        userType: "",
        address: "",
        city: "",
        zipcode: "",
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
            userType: this.state.userType,
            address: this.state.address,
            zipcode: parseInt(this.state.zipcode),
            city: this.state.city,
            email: this.state.email,
            phone: this.state.phone
        }


        API.registerNewUser(newUser)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="form">

                <div className="formCont">
                    <h2 >Merchant Registration</h2>
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
                            <input id="userType" type="text" name="userType" required onChange={this.handleInputChange} />
                            <label htmlFor="userType">Are you a "farmer" or a "storeOwner"?</label>
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
                            <input id="zipcode" type="text" name="zipcode" required onChange={this.handleInputChange} />
                            <label htmlFor="zipcode">Zipcode</label>
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
                            <button className="btn waves-effect waves-light" onClick={this.handleFormSubmit} name="action"><Link to="/merchantdashboard">Submit
                <i className="material-icons right">send</i>
                            </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MerchantRegistrationForm;