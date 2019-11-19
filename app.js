const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get("/", function(req, res) {
  res.render("anasayfa");
});

app.get("/kayit-ol", function(req, res) {
  res.render("kayıtOl");
});

app.get("/uye-giris", function(req, res) {
  res.render("uyeGiris");
});

app.get("/admin-giris", function(req, res) {
  res.render("admin-giris");
});
app.get("/iletisim", function(req, res) {
  res.render("iletisim");
});




app.listen(3000, function() {
  console.log("Dinleninen port : 3000");
})