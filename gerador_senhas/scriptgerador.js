let btn = document.querySelector('.btn-cta');
let range = document.querySelector('#tamanho');
let valor = document.querySelector('#valor');
let passord = document.querySelector('#password');
let containerPassword = document.querySelector('.container-password');
let charset = '@_!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let novaSenha = '';

range.addEventListener('input', ()=>{
    valor.innerHTML = range.value;
})

function gerarSenha() {
    let pass = '';
    let n = charset.length;
    for (let i = 0; i < range.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    passord.innerHTML = pass;
    containerPassword.classList.remove("hide");
    novaSenha = pass;
}

function copiar() {
    navigator.clipboard.writeText(novaSenha);
    alert('Senha copoiada com sucesso!');
}

