document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formComentario");
  const lista = document.getElementById("listaComentarios");

  function carregarComentarios() {
    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    lista.innerHTML = "";
    comentarios.forEach(c => {
      const div = document.createElement("div");
      div.className = "comentario";
      div.innerHTML = `<strong>${c.nome}</strong><p>${c.mensagem}</p>`;
      lista.appendChild(div);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome && mensagem) {
      const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
      comentarios.push({ nome, mensagem });
      localStorage.setItem("comentarios", JSON.stringify(comentarios));
      form.reset();
      carregarComentarios();
    }
  });

  carregarComentarios();
});
