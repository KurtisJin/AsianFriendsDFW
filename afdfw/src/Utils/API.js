import axios from "axios";

export default {
    getMeetupEvents: function() {
        return axios.get(`https://api.meetup.com/asian-friends-of-dfw/events`);
    },

    // getEvent: function(search) {
    //     return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=3&apiKey=2111bf1d3def4918a76cb5270b0122ce`);
    // },

    // getEventURL: function(id){
    //     console.log(id)
    //     return axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=2111bf1d3def4918a76cb5270b0122ce`);
    // },

    // getLoggedIn: function(bool){
    //     console.log(bool)
    //     return axios.get("api/currentUser",bool)
    // },

    // saveUser: function(loginData) {
    //     return axios.post("/api/login", loginData);
    //   },

    //   postUser: function(regData){
    //       return axios.post("api/register", regData);
    //   },

    //   logUserOut: function(userData){
    //       return axios.get("/api/logout", userData);
    //   }



}