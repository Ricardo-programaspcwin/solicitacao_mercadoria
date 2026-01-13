function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const url = "https://script.google.com/macros/s/AKfycbznRe2uXNYTBBLsY5PrlQq-hBHwk59A2V2RKXEFVuGBk_0gtbQzd4LoWXasaNN4X-Yg9A/exec";

    fetch(`${url}?usuario=${usuario}&senha=${senha}`)
        .then(res => res.json())
        .then(data => {
            if (data.status === "ok") {
                localStorage.setItem("usuarioLogado", data.usuario);
                localStorage.setItem("permissao", data.permissao);
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("mensagem").innerText =
                    "Usuário ou senha inválidos";
            }
        })
        .catch(() => {
            document.getElementById("mensagem").innerText =
                "Erro ao conectar ao servidor";
        });
}
