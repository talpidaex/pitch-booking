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
router.get("/hakkimizda", function(req, res) {
  res.render("hakkimizda");
})
router.get("/randevual", function(req, res) {
  res.render("randevual");
})
router.get("/galeri", function(req, res) {
  res.render("galeri");
})
router.get("/google-kayit", function(req,res){
  res.render("google-kayit");
})
router.get("/face-kayit", function(req,res){
  res.render("face-kayit");
})


module.exports = router;