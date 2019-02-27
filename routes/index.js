const express = require('express');
const router = express.Router();


router.use('/application', require('./application.js'))
router.use('/user', require('./user.js'));
router.use('/landmark', require('./landmark.js'));
router.use('/tour', require('./tour.js'));


module.exports = router;