const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


module.exports = mongoose.model("Tour", TourSchema);