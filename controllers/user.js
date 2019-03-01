const passport = require("passport");
const { User } = require("../models/User");

module.exports = {
    getSignup: function(req,res){
        res.render("user/signup")
    },
    postSignup: function(req,res){
        const { email, password } = req.body;
        // creates a new instance of user with only the username stored and pass the password through to passport to hash and store hashed version in the User object.
        User.register(new User({ email }), password)
          .then(user => {
            // define variable that is a function checking for authentication via local session data.
            const authenticate = passport.authenticate("local");
            // if the username and pw are valid, the message "you created an account shows", otherwise an error message shows and the user is redirected to the signup page.
            authenticate(req, res, function() {
              req.flash("success", "You created an account!");
              res.redirect("/application");
            });
          })
          .catch(err => {
            req.flash("error", err.message);
            res.redirect("/signup");
          });

    },
    getLogin: function(req,res){
        res.render("user/login")
    },
    postLogin: function(req,res){

    },
    getLogout: function(req,res){
    }
}