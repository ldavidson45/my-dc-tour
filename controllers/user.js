const passport = require("passport");
const { User } = require("../models/User");

module.exports = {
    getSignup: function(req,res){
        res.render("user/signup")
    },
    postSignup: function(req,res){

    },
    getLogin: function(req,res){
        res.render("user/login")
    },
    postLogin: function(req,res){

    },
    getLogout: function(req,res){
    }
}