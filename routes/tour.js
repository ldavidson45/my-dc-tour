const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tour");

router.get('/new', tourController.new);
router.post('/', tourController.create);
router.get('/:id', tourController.show);
router.get('/:id/edit', tourController.edit);
router.put('/:id', tourController.update);
router.delete('/:id', tourController.delete);
router.get('/', tourController.index)

module.exports = router;