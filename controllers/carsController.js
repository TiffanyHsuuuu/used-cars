const Car = require("../models/car");

module.exports = {
    getBrands(req, res, next) {
        Car.aggregate([{ $group: {_id: "$brand", count: {$sum: 1}}}])
            .sort({count: -1})
            .then(brands => res.send(brands))
            .catch(next); 
        //  when error happens just skip it and jump to the next one
    },
    getCars(req, res, next) {
        Car.find(req.body)
            .then(cars => res.send(cars))
            .catch(next);
    }
};