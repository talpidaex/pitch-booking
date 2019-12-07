//----------------npm paketlerimiz---------------
const express = require("express");
const bodyParser = require("body-parser");
var app = express();

//-------------App Config bölümü---------
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}));

//-------------Router middleware------------
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");
const apiRoutes = require("./api/apiRoutes");
app.use(indexRoutes);
app.use(adminRoutes);
app.use(apiRoutes);
//metecapar

//--------------Server-------------------
app.listen(3000, function() {
  console.log("Dinleninen port : 3000");
})