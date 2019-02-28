const Tour = require ("../models/Tour");
const Landmark = require("../models/Landmark")

module.exports = {
    new: function(req, res) {
        Landmark.find({})
        .then(landmarks => {
        res.render('tour/new', { landmarks })
        })
    },
    create: function(req, res){
        const sites = [req.body.landmark.value]
        console.log(sites)
        // Tour.create({
        //     title: req.body.title,
        //     description: req.body.description
        // }).then(tour => {
        //     Landmark.find()
        // })
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