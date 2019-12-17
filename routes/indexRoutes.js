//Bu sayfa kullanıcının yapacağı get isteklerini içeriyor
// Ayırmamın sebebi app.js çok karışmaması için  ~ Oğuzhan Bayrak
const express = require("express");
const router = express.Router();
const connection = require("../models/connection");

router.get("/", function(req, res) {
  if (req.session.loggedin) {
    res.render("anasayfa");
  } else {
    res.render("anasayfa");
  }
});
router.get("/kayit-ol", function(req, res) {
  res.render("kayıtOl");
});
router.get("/uye-giris", function(req, res) {
  res.render("uyeGiris");
});
router.post("/uye-giris", function(req, res) {

  var uyeEmail = req.body.uye_email;
  var uyeSifre = req.body.uye_sifre;
  if (uyeEmail && uyeSifre) {
    connection.query("select * from UYE where uye_email = ? AND uye_sifre = ?", [uyeEmail, uyeSifre], function(err, results, fields) {
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.username = uyeEmail;
        res.redirect("/");
      } else {
        res.send('Incorrect Username and/or Password!');
      }
      res.end();
    });
  } else {
    console.log(uyeSifre);

    console.log(uyeEmail);
    res.send('Please enter Username and Password!');
    res.end();
  }
});

router.get("/cikis-yap", function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("çıkış başarılı!");
      res.redirect("/");
    }
  })

})
router.get("/iletisim", function(req, res) {
  res.render("iletisim");
});
router.get("/hakkimizda", function(req, res) {
  res.render("hakkimizda");
});
router.get("/randevual", function(req, res) {
  res.render("randevual");
});
router.get("/kayitli-randevular", function(req, res) {
  res.render("kayitli-randevular");
});
router.get("/randevu-guncelle", function(req, res) {
  res.render("randevu-guncelle");
});
router.get("/randevu-iptal", function(req, res) {
  res.render("randevu-iptal");
});
router.get("/dacik-saha", function(req, res) {
  res.render("dacik-saha");
});
router.get("/kapali-saha", function(req, res) {
  res.render("kapali-saha");
});
router.get("/isitmali-saha", function(req, res) {
  res.render("isitmali-saha");
});


router.get("/galeri", function(req, res) {
  res.render("galeri");

});
router.get("/google-kayit", function(req, res) {
  res.render("google-kayit");
})
router.get("/face-kayit", function(req, res) {
  res.render("face-kayit");
})
router.get("/2fa-giris", function(req, res) {
  res.render("2fa-giris");
})
router.get("/halisaha-degerlendirme", function(req, res) {
  res.render("halisaha-degerlendirme");
})
router.get("/profil-guncelle", function(req, res) {
  res.render("profil-guncelle");
})
router.get("/sosyalmedya", function(req, res) {
  res.render("sosyalmedya");
})

module.exports = router;