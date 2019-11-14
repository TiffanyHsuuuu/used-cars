const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: String,
    cartype: String,
    color: String,
    fuelType: String,
    mileage: Number,
    model: String,
    price: Number,
    ps: Number,
    yearOfRegistration: Number,
    image: String
});

const Car = mongoose.model("car", CarSchema);

module.exports = Car;
