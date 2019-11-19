const express = require("express");
const router = express.Router();


router.get("/admin-giris", function(req, res) {
  res.render("admin-giris");
});


module.exports = router;