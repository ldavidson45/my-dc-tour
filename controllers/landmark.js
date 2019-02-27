const Landmark = require('../models/Landmark');

module.exports = {
    new: function(req,res){
        res.render('landmark/new')
    },
    create: function (req,res){
        const {title, description, neighborhood } = req.body;
        Landmark.create({
            title,
            description,
            neighborhood
        }).then(landmark => {
            res.redirect(`/landmark/${landmark._id}`);
        })
    },
    show: function (req,res){
        Landmark.findById(req.params.id)
        .then(landmark => {
            res.render('landmark/show', { landmark })

        })
    }
    
}