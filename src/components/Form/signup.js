import React from 'react'

function RegstrationForm() {
    return(
        <div className= "form "></div>
        <Container>
            <div className="formCont">
            <h2>Register</h2>
            <div className = "row">
            <div className="input-field col s6">
            <input id="name" type="text" required />
            <label for="name">Enter your name</label>
            </div>
            <div className="input-field col s6">
            {/* So on and so forth for other registration fields */}
            </div>
            </div>
            </div>
        </Container>
    )
}
export default SignUp;