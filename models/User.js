const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    email: String,
    tours: [{
        type: Schema.ObjectId, ref: 'Tour'
    }],
    favoriteLandmarks: [{
        type: Schema.ObjectId, ref: 'Landmark'
    }]

})

module.exports = mongoose.model("User", UserSchema);