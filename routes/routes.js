const CarController = require("../controllers/carsController");

module.exports = app => {
    app.get("/cars/brand", CarController.getBrands);
    app.get("/cars", CarController.getCars);
}