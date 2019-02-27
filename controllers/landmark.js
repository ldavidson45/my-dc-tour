const { Landmark } = require('../models/Landmark');

module.exports = {
    new: function(req,res){
        res.render('landmark/new')
    },
    create: function (req,res){

    },
    show: function (req,res){
        res.render('landmark/show')
    }
    
}