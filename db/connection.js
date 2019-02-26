const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/history-facts-app");
mongoose.Promise = Promise;
module.exports = mongoose;