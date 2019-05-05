import React from "react"


function searchBox() {
return (
<div class="row">
<form class="col s12">
  <div class="row">
    <div class="input-field col s12 searchTerm">
      <textarea id="textarea1" class="materialize-textarea"></textarea>
      <input id="search" type="search" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} required />
      <label for="textarea1">Search</label>
    </div>
  </div>
</form>
</div>
)
}

export default searchBox;