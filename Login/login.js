function verificarLogin(email, senha) {
    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');
    
    if (email === emailSalvo && senha === senhaSalva) {
        return true;
    } else {
        return false;
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const lembrar = document.querySelector('input[name="remember"]:checked');

    const loginValido = verificarLogin(email, senha);

    if (loginValido) {
        if (lembrar) {
            localStorage.setItem('email', email);
            localStorage.setItem('senha', senha);
        }

        alert("Login bem-sucedido!");
        window.location.href = "Pag-inicial.html";
    } else {
        alert("Email ou senha incorretos.");
    }
});

window.addEventListener('load', function() {
    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');
    
    if (emailSalvo && senhaSalva) {
        document.getElementById('email').value = emailSalvo;
        document.getElementById('senha').value = senhaSalva;
        document.querySelector('input[name="remember"]').checked = true;
    }
});
