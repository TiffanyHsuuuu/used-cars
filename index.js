const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const scrape = require("./scrape");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost:27017/carDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.
app.use(cors());
//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
app.use(bodyParser.json());
routes(app);

//scrape();


const port = 3050
app.listen(port, ()=> {
    console.log("Running on port %d", port)
});