import React from 'react'

function RegstrationForm() {
    return(
        <div className= "form"></div>
        <Container>
            <div className="formCont">
            <h2>Register</h2>
            <div className = "row">
            <div className="input-field col s6">
            <input id="name" type="text" required />
            <label for="name">Enter your name</label>
            </div>
            <div className="input-field col s6">
            <input id="address" type="text" required />
            <label for="address">Enter your address</label>
            </div>
            <div className="input-field col s6">
            <input id="city" type="text" required />
            <label for="city">City</label>
            </div>
            <div className="input-field col s6">
            <input id="state" type="text" required />
            <label for="state">State</label>
            </div>
            <div className="input-field col s6">
            <input id="email" type="text" required />
            <label for="email">Email</label>
            </div>
            <div className="input-field col s6">
            <input id="phone" type="text" required />
            <label for="phone">Phone</label>
            </div>
            <div className="input-field col s6">
            <input id="produce" type="text" required />
            <label for="produce">What are you willing to produce</label>
            </div>
            </div>
            </div>
        </Container>
    )
}
export default SignUp;