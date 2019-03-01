const Landmark = require('../models/Landmark');

module.exports = {
    new: function(req,res){
        res.render('landmark/new')
    },
    create: function (req,res){
        const {title, description, address, city, state } = req.body;
        Landmark.create({
            title,
            description,
            address: {
                street: address,
                city,
                state
            }
        }).then(landmark => {
            res.redirect(`/landmark/${landmark._id}`);
        })
    },
        show: function (req,res){
            Landmark.findById(req.params.id)
            .then(landmark => {
                res.render('landmark/show', { landmark })

            })
    },
    edit: function(req, res) {
        Landmark.findById(req.params.id)
        .then(landmark => {
            res.render('landmark/edit', { landmark });
        })
    },
    update: function(req, res) {
        const { title, description, address, state, city} = req.body;
        Landmark.findByIdAndUpdate(req.params.id, {
            title,
            description,
            address: {
                street: address,
                city,
                state
            }
        }).then(landmark => {
            res.redirect(`/landmark/${landmark._id}`)
        })

    },
    delete: function (req, res) {
        Landmark.findByIdAndRemove(req.params.id)
        .then(res.redirect('/application'))
    }
    
}