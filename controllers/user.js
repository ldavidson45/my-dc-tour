const passport = require("passport");
const { User } = require("../models/User");

module.exports = {
    getSignup: function(req,res){
        res.render("user/signup")
    },
    postSignup: function(req,res){
      // coming soon

    },
    getLogin: function(req,res){
        res.render("user/login")
    },
    postLogin: function(req,res){
      // coming soon

    },
    getLogout: function(req,res){
            // coming soon

    }
}