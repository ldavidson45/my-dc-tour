const express = require('express');
const router = express.Router();
const Landmark = require('../models/Landmark');



router.use('/application', require('./application.js'))
router.use('/user', require('./user.js'));
router.use('/landmark', require('./landmark.js'));
router.use('/tour', require('./tour.js'));

router.get('/', function (req, res) {
    Landmark.find({})
    .then(landmarks => {
        res.render('index', { landmarks })
    });
    
});

module.exports = router;