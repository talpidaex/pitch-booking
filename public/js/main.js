$("#admin-giris-button").click(function() {
  alert("Admin Giriş Başarılı!");
});
$("#admin-iletisim-güncelle-button").click(function() {
  alert("İletişim Bilgileri Başarıyla Güncellendi!");
});
$("#admin-sifre-degistir").click(function() {
  alert("Şifre Başarıyla Değiştirildi!");
});
$("#admin-duyuru-button").click(function() {
  alert("Duyuru Eklendi!");
});
$("#admin-image-add-button").click(function() {
  alert("Yeni Fotoğraflar Eklendi!");
});

$('#sikayet-form').click(function() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Giriş Başarılı!',
    showConfirmButton: false,
    timer: 1300
  })
});