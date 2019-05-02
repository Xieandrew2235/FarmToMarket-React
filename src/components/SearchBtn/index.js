import React from "react"
import { Link } from 'react-router-dom';

function SearchBtn() {
    return (
<button class="btn waves-effect waves-light" type="submit" name="action">Submit
<Link to="/dashboard">
    <i class="material-icons right">send</i>
    </Link>
  </button>
    );
  } 

  export default SearchBtn;