import React from 'react'
import { Link } from 'react-router-dom';


function RegistrationForm() {
    return(
        <div className= "form">
        
            <div className="formCont">
            <h2 center>Farmer Registration</h2>
            <div className = "row">
            <div className="input-field col s6">
            <input id="name" type="text" required />
            <label htmlFor="name">Enter your name</label>
            </div>
            <div className="input-field col s6">
            <input id="address" type="text" required />
            <label htmlFor="address">Enter your address</label>
            </div>
            <div className="input-field col s6">
            <input id="city" type="text" required />
            <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s6">
            <input id="state" type="text" required />
            <label htmlFor="state">State</label>
            </div>
            <div className="input-field col s6">
            <input id="email" type="text" required />
            <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s6">
            <input id="phone" type="text" required />
            <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
            <input id="produce" type="text" required />
            <label htmlFor="produce">What are you willing to produce</label>
            </div>
            <div className="input-field col s6">
            <input id="nonprofit" type="text" required />
            <label htmlFor="nonprofit">Are you involved with non-profits?</label>
            </div>
            <div className="input-field col s6">
            {/* Add a link, link-to for the submit button that redirects to dashboard */}
            <Link to="/dashboard">
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
            </button>
            </Link>
            </div>
            </div>
            </div>
        </div>
    )
}
export default RegistrationForm;