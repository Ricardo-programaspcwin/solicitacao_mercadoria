// verifica se está logado
const usuario = localStorage.getItem("usuarioLogado");

if (!usuario) {
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
}
