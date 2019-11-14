const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const scrape = require("./scrape");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost/carDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());
routes(app);

//scrape();

const port = 3050
app.listen(port, ()=> {
    console.log("Running on port %d", port)
});