document.addEventListener("DOMContentLoaded", function () {
    // Menambahkan event listener untuk setiap elemen dengan kelas .photo-grid-item
    var photoGridItems = document.querySelectorAll(".photo-grid-item");
  
    photoGridItems.forEach(function (item) {
      // Menangani event saat kursor masuk ke elemen
      item.addEventListener("mouseenter", function () {
        showDescription(item);
      });
  
      // Menangani event saat kursor keluar dari elemen
      item.addEventListener("mouseleave", function () {
        hideDescription(item);
      });
    });
  });
  
  // Menampilkan deskripsi saat kursor masuk
  function showDescription(item) {
    var description = item.querySelector(".photo-description");
    description.style.opacity = "1";
  }
  
  // Menyembunyikan deskripsi saat kursor keluar
  function hideDescription(item) {
    var description = item.querySelector(".photo-description");
    description.style.opacity = "0";
  }
  