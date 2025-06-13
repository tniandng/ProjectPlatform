// Toggle Class Active untuk hambuurger menu
const navbarNav = document.querySelector(".navbar-nav");
//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Toggle Class Active untuk hambuurger search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

// Cek apakah user sudah login saat masuk index.html
window.onload = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    window.location.href = "login.html"; // paksa login dulu
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nama = btn.getAttribute("data-nama");
      const harga = parseInt(btn.getAttribute("data-harga"));

      const item = { nama, harga };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${nama} ditambahkan ke keranjang!`);
    });
  });
});
