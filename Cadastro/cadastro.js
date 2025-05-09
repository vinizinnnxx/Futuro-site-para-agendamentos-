function salvarCadastro(email, senha) {
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;
    const senhaConfirmar = document.getElementById('senhaConfirmar').value;

    if (senha !== senhaConfirmar) {
        alert("As senhas não coincidem!");
        return;
    }

    salvarCadastro(email, senha);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
});

