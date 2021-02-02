async function exibirPosts() {
  const response = await fetch("https://foodgram-back.herokuapp.com/posts");
  const arrayDeFotos = await response.json();

  //Esse código ficará responsavel por pegar as fotos postadas no servidor e deixar disponivel no formato de array

  const sectionPosts = document.querySelector("section");
  for (var i = 0; i < arrayDeFotos.length; i++) {
    sectionPosts.insertAdjacentHTML(
      "beforeend",
      `
    <div class = "post">
      <div>Por: ${arrayDeFotos[i].user}</div>
      <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}" alt="" />
      </div>
    `
    );
  }
}
function exibirNome() {
  const spanNome = document.querySelector("#nome");

  if (location.pathname === "/") {
    return;
  }
  if (sessionStorage.getItem("nomeUsuario")) {
    spanNome.textContent = sessionStorage.getItem("nomeUsuario");
  }
}

exibirPosts();
exibirNome();
