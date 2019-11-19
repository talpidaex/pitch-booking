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
app.use(indexRoutes);
app.use(adminRoutes);
//mucahit//

//--------------Server-------------------
app.listen(3000, function() {
  console.log("Dinleninen port : 3000");
})