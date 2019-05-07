import axios from "axios";

export default {
    //https://cors-anywhere.herokuapp.com/
    searchFarmer:  () => {
        return axios.get("/api/farmers")
    },
    getFarmersByProduce: (prod_name) => {
        return axios.get("/api/farmers/produce")
    },
    searchMerchant:  () => {
        return axios.get("/api/merchants")
    },
    //get request to receive a user's ifo with his/her items and the wishlist
    getUserInfo:  (userid) => {
        return axios.get("" + userid)
    },

    // PASSPORT METHODS
    // ====================================

    registerNewUser: userData => {
        return fetch("/auth/register",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(userData),
            credentials: 'include',
            mode: 'cors'
          });
    },
    loginUser: userData => {
        return fetch("/auth/signin",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(userData),
            credentials: 'include',
            mode: 'cors'
        });
    },
    checkAuth: () => {
		return fetch("/auth", {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        });
    },
    logoutUser: () => {
        return fetch("/auth/logout", {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        });
    },
    getUserData: () => {
        return fetch("/api/farmers/user", {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        }); 
    },
    updateUser: (user) =>{
        return fetch("/api/farmers/user",{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user),
            credentials: 'include',
            mode: 'cors'
        });
    }
    

}