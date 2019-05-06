import React from "react"


function searchBox() {
return (
<div className="row">
<form className="col s12">
  <div className="row">
    <div className="input-field col s12 searchTerm">
      <textarea id="textarea1" className="materialize-textarea"></textarea>
      <input id="search" type="search" name="searchTerm"/>
      <label htmlFor="textarea1">Search</label>
    </div>
  </div>
</form>
</div>
)
}

export default searchBox;