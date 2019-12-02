const express = require("express");
const router = express.Router();


router.get("/admin-giris", function(req, res) {
  res.render("admin-giris");
});

router.get("/adminDashboard", function(req, res) {
  res.render("admin/admin-dashboard");
});

router.get("/iletisimGuncelle", function(req, res) {
  res.render("admin/iletisimGuncelle");
});

router.get("/sikayet-oneri", function(req, res) {
  res.render("admin/sikayet-öneriler");
});

router.get("/SifreDegistir", function(req, res) {
  res.render("admin/sifre-degistir");
});

router.get("/duyuru-galeri-ekle", function(req, res) {
  res.render("admin/duyuru-ve-image-ekle");
});

router.get("/admin-uye-goruntule", function(req, res) {
  res.render("admin/admin-uye-goruntule");
});
router.get("/admin-reklam-yonetim", function(req, res) {
  res.render("admin/admin-reklam-yonetim");
})

module.exports = router;