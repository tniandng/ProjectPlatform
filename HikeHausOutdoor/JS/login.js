document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "index.html";
  } else {
    document.getElementById("loginMessage").innerText =
      "Username atau password salah!";
  }
});
