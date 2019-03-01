const express = require('express');
const router = express.Router();


router.use('/application', require('./application.js'))
router.use('/user', require('./user.js'));
router.use('/landmark', require('./landmark.js'));
router.use('/tour', require('./tour.js'));

router.get('/', function (req, res) {
    res.render('user/login')
});

module.exports = router;