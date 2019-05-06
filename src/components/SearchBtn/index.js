import React from "react"
import { Link } from 'react-router-dom';

function SearchBtn() {
    return (
<button className="btn waves-effect waves-light" type="submit" name="action">Submit
<Link to="/dashboard">
    <i className="material-icons right">send</i>
    </Link>
  </button>
    );
  } 

  export default SearchBtn;