import axios from "axios";

export default {

    getMeetupEvents: function() {
        return axios.get(`https://api.meetup.com/asian-friends-of-dfw/events`);
    },

    getEventPics: function(id) {
        return axios.get(`https://api.meetup.com/asian-friends-of-dfw/photos`);
    },

    
    getLoggedIn: function(bool){
        console.log(bool)
        return axios.get("api/currentUser",bool)
    },

    saveUser: function(loginData) {
        return axios.post("/api/login", loginData);
      },

      postUser: function(regData){
          return axios.post("api/register", regData);
      },

      logUserOut: function(userData){
          return axios.get("/api/logout", userData);
      }



}