const express = require("express");
const router = express.Router();
const landmarkController = require("../controllers/landmark");

router.get('/new', landmarkController.new);
router.post('/', landmarkController.create);
router.get('/:id', landmarkController.show);
router.get('/:id/edit', landmarkController.edit);
router.put('/:id', landmarkController.update);
router.delete('/:id', landmarkController.delete)

module.exports = router;