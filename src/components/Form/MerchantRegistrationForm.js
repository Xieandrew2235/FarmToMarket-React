import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Select, TextInput, Row, Button, Icon } from 'react-materialize';
import API from "../../utils/API";

class MerchantRegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            userType: "",
            address: "",
            city: "",
            zipcode: "",
            email: "",
            phone: "",
            formDisabled: true
        };
    }
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

        // if(this.state.userName.length > 0 && this.state.password.length > 5 && this.state.userType.length > 0 && this.state.address.length > 4 && this.state.city.length > 0 && this.state.zipcode.length > 3 && this.state.email.length > 4  && this.state.phone.length > 9){
        //     this.setState({
        //         formDisabled: false
        //     })
        // }

        
    };

    handleRegisterSubmit = event => {
        event.preventDefault();

        const newUser = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            userType: this.state.userType,
            address: this.state.address,
            zipcode: parseInt(this.state.zipcode),
            city: this.state.city,
            email: this.state.email,
            phone: this.state.phone
        }
        console.log(newUser);

        API.registerNewUser(newUser)
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
        // console.log(this.state)
        return (
            <div className="form">

                <form className="formCont">
                    <h2 >Merchant Registration</h2>
                    <Row>
                        <TextInput label="Enter a username" id="userName" type="text" name="userName" required onChange={this.handleInputChange} className="validat" s={12} m={6} l={6} /> 
                        <TextInput label="Enter your password (at least 6 characters)" id="password" type="password" name="password" required onChange={this.handleInputChange} className="validate" s={12} m={6} l={6} />
                    </Row>
                    <Row>
                        <TextInput label="Enter a first name" id="firstName" type="text" name="firstName" required onChange={this.handleInputChange} className="validat" s={12} m={6} l={6} /> 
                        <TextInput label="Enter a last name" id="lastName" type="text" name="lastName" required onChange={this.handleInputChange} className="validat" s={12} m={6} l={6} /> 
                    </Row>
                    <Row>
                        <TextInput label="Enter your address" id="address" type="text" name="address" required onChange={this.handleInputChange} className="validate" s={12} m={6} l={6}  />
                        <TextInput label="Enter your city" id="city" type="text" name="city" required onChange={this.handleInputChange} className="validate" s={12} m={6} l={6} />
                    </Row>
                    <Row>
                        <TextInput label="Enter your zipcode" id="zipcode" type="number" name="zipcode" required onChange={this.handleInputChange} className="validate" s={12} m={6} l={6}/>
                        <TextInput label="Enter your email" email id="email" type="email" name="email" required onChange={this.handleInputChange} className="validate" s={12} m={6} l={6}/>
                    </Row>
                    <Row>
                        <TextInput label="Enter your Phonenumber" id="phone" type="number" name="phone" required onChange={this.handleInputChange} className="validate" s={12} m={6} l={6}/>
                        <Select id="userType"  value="" preventDefault={this.state.userType} name="userType"  onChange={this.handleInputChange} className="validat" s={12} m={6} l={6} required>
                            <option value="" disabled>
                                Choose your role
                            </option>
                            <option value="farmer">
                                Farmer
                            </option>
                            <option value="storeOwner">
                                Store Owner
                            </option>
                        </Select>
                    </Row>

                    <Button waves="light" style={{marginRight: '5px'}}  onClick={this.handleRegisterSubmit} >
                        Register
                        <Icon right>
                         send
                        </Icon>
                    </Button>
                </form>
            </div>
        )
    }
}
export default MerchantRegistrationForm;