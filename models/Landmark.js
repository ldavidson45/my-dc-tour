const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const LandmarkSchema = new Schema({
    title: String,
    description: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipcode: Number,
        lat: Number,
        lng: Number
    },
    neighborhood: String,
    

})

module.exports = mongoose.model("Landmark", LandmarkSchema);