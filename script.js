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
