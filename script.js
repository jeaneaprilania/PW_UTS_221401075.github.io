document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan skrip Bootstrap
  const bootstrapScript = document.createElement("script");
  bootstrapScript.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
  bootstrapScript.integrity =
    "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL";
  bootstrapScript.crossOrigin = "anonymous";
  document.head.appendChild(bootstrapScript);

  // Menambahkan skrip Popper.js
  const popperScript = document.createElement("script");
  popperScript.src =
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
  popperScript.integrity =
    "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r";
  popperScript.crossOrigin = "anonymous";
  document.head.appendChild(popperScript);

  // Menambahkan skrip untuk navbar sticky
  const stickyNavbarScript = document.createElement("script");
  stickyNavbarScript.text = 
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  ;
  document.head.appendChild(stickyNavbarScript);
});
