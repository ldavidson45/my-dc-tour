const Landmark = require('../models/Landmark');

module.exports = {
    index: function(req, res) {
        Landmark.find({})
        .then(landmarks => {
            res.render('index', { landmarks })
        });
        
    }
}