function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("cart-list");
  const total = document.getElementById("total");

  list.innerHTML = "";
  let totalHarga = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nama} - Rp ${item.harga.toLocaleString()} 
      <button onclick="removeItem(${index})">Hapus</button>`;
    list.appendChild(li);
    totalHarga += item.harga;
  });

  total.innerText = `Total: Rp ${totalHarga.toLocaleString()}`;
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

window.onload = loadCart;
