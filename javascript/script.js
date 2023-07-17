function redirecionar(event) {
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')
    var check = document.getElementById('check')

    event.preventDefault();
    //var email = document.querySelector('input[name="username"]').value;
    //var senha = document.querySelector('input[name="password"]').value;

    if (email.value.length > 0 && senha.value.length > 0) {
        if (check.checked) {
            window.location.href = "https://plataforma-ai.vercel.app";
        } else {
            window.alert('aceite os termos de uso antes de se registrar.')
        }
    }
}