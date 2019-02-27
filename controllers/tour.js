const { Tour } = require ("../models/Tour");

module.exports = {
    new: function(req, res) {
        res.render('tour/new')
    },
    create: function(req, res){

    },
    show: function(req, res){
        res.render('tour/show')
    },
    edit: function(req, res) {
        res.render('tour/edit')
    },
    update: function(req, res) {

    },
    delete: function(req, res){

    }

}