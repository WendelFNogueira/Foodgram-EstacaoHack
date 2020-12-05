var botaoLogin = document.querySelector("#btnLogin");

function login() {
  const inputLogin = document.querySelector("#inputNome");

  if (inputLogin.value.length === 0) {
    return alert("Digite um nome primeiro!");
  }
  sessionStorage.setItem("nomeUsuario", inputLogin.value);
  window.location.href = "../teste/feed.html";
}

botaoLogin.addEventListener("click", login);
