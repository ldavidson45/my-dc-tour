const Tour = require ("../models/Tour");
const Landmark = require("../models/Landmark")

module.exports = {
    index: function (req, res) {
        Tour.find({})
        .then(tours => {
            res.render('tour/index', { tours })
        })
    },
    new: function(req, res) {
        Landmark.find({})
        .then(landmarks => {
        res.render('tour/new', { landmarks })
        })
    },
    create: function(req, res){
        const { title, description } = req.body;
        Tour.create({
            title,
            description,
            landmarks: req.body.landmark
        }).then(tour => {
            res.redirect(`/tour/${tour._id}`)
        })
    },

    show: function(req, res){
        Tour.findById(req.params.id)
        .populate("landmarks")
        .then(tour => {
            res.render('tour/show', { tour })

        })    },
    edit: function(req, res) {
        res.render('tour/edit')
    },
    update: function(req, res) {

    },
    delete: function(req, res){
        Tour.findByIdAndDelete(req.params.id)
        .then(res.redirect('/tour'))

    }

}