//Bu sayfa kullanıcının yapacağı get isteklerini içeriyor
// Ayırmamın sebebi app.js çok karışmaması için  ~ Oğuzhan Bayrak
const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("anasayfa");
});
router.get("/kayit-ol", function(req, res) {
  res.render("kayıtOl");
});

router.get("/uye-giris", function(req, res) {
  res.render("uyeGiris");
});

router.get("/iletisim", function(req, res) {
  res.render("iletisim");
});


module.exports = router;