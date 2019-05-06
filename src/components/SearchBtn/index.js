import React from "react"
import { Link } from 'react-router-dom';

function SearchBtn(props) {
    return (
<button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.click}>Submit
<Link to="/dashboard">
    <i className="material-icons right">send</i>
    </Link>
  </button>
    );
  } 

  export default SearchBtn;