document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("reg-username").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value;

    if (!username || !email || !password) {
      document.getElementById("registerMessage").innerText =
        "Semua field harus diisi!";
      return;
    }

    const newUser = { username, email, password };

    // Simpan user ke localStorage (sebagai array)
    let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const usernameExist = users.some((u) => u.username === username);
    const emailExist = users.some((u) => u.email === email);

    if (usernameExist) {
      document.getElementById("registerMessage").innerText =
        "Username sudah digunakan.";
      return;
    }

    if (emailExist) {
      document.getElementById("registerMessage").innerText =
        "Email sudah digunakan.";
      return;
    }

    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    // Redirect ke login
    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "login.html";
  });
