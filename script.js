function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (username === "candidato" && password === "Candidato.22") {
    window.location.href = "home.html";
  } else {
    errorMsg.style.display = "block";
  }
}

function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const button = document.getElementById("login-btn");
  const errorMsg = document.getElementById("error-msg");

  // Habilita/desabilita botão
  if (username.trim() !== "" && password.trim() !== "") {
    button.disabled = false;
    button.classList.add("active");
  } else {
    button.disabled = true;
    button.classList.remove("active");
  }

  // 🔥 MELHORIA: esconde erro ao digitar novamente
  errorMsg.style.display = "none";
}
