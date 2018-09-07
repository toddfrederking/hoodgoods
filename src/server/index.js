const express = require("express");
const mongoose = require ("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://toddfrederking:Lgarrett1970@ds163680.mlab.com:63680/capstone0618");
console.log("connection successful");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const tshirtroutes = require ("./Routes/tshirtroutes");

app.use(tshirtroutes);
app.use(express.static(__dirname + '../../../build'));

const port = process.env.PORT || 3002;

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log(`Web server is now living in apartment ${port}(really)`);
  });



