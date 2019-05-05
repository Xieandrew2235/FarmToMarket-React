import axios from "axios";

export default {
    searchFarmer: function () {
        return axios.get("http://localhost:3001/api/farmers")
    },
    searchMerchant: function () {
        return axios.get("http://localhost:3001/api/merchants")
    },
    //get request to receive a user's ifo with his/her items and the wishlist
    getUserInfo: function (userid) {
        return axios.get("" + userid)
    },

    // PASSPORT METHODS
    // ====================================

    registerNewUser: userData => {
        return axios.post("http://localhost:3001/auth/register", userData);
    },

    loginUser: userData => {
        return axios.post("http://localhost:3001/auth/signin", userData);
    }

}