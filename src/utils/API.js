import axios from "axios";

export default {
    //get most recently added items on the landing page
    getRecentPeople: function () {
        return axios.get("")
    },
    // Gets items based on a search term/category - neds more work
    searchPeople: function (search) {
        return axios.get("" + search); //change the url based on our api
    },
    //post request for the create a new item
    createNewPeople: function () {
        return axios.post("")
        /* example
        {	
        "_owner": "5cc8da15ce98f8f39fccd613",
	    "title": "Book",
	    "picture": "test",
	    "description": "C++ textbook",
	    "condition": "so-so",
	    "category": "Books"
        }
        */
    },
    //get request to receive a user's ifo with his/her items and the wishlist
    getUserInfo: function (userid) {
        return axios.get("" + userid)
    },
    //get request to receive items based on the category and the search term
    getSearchedItems: function (category, searchTerm) {
        /*  category = "Electronics";
         searchTerm = "Apple"; */
        console.log("category: " + category);
        console.log("searchTerm: " + searchTerm);
        return axios.get("") 
    },
    /* createNewItem: function() {
        return axios.post("Localhost:3000/api/items/:userid")
    },
    updateItem: function() {
        return axios.put("Localhost:3000/api/items/:itemId")
    },
    deleteItem: function() {
        return axios.delete("Localhost:3000/api/items/:itemId")
    } */

    getFarmersByProduce: function(produceName) {
        return axios.get("/api/farmers/produce", produceName);
    }

}