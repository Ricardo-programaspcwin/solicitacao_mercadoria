function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "123") {
        // salva sessão simples
        localStorage.setItem("usuarioLogado", usuario);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("mensagem").innerText = "Usuário ou senha inválidos";
    }
}
