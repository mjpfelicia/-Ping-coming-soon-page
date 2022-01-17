const msgErro = document.querySelector("#error-msg");
const input = document.querySelector("#emails").value;
const button = document.querySelector(".button")
const form = document.querySelector('form');
const msgEmail = document.querySelector(".conteudo-input");


button.addEventListener("click", (ev) => {

    const msgPlace = document.querySelector(".conteudo-input").placeholder = "exemplo@email.com";
    if (input === '') {
        msgErro.style.display = 'flex';
        form.style.border = '0.8px solid red';

    }

})
msgEmail.addEventListener("focus", (ev) => {
    const msgPlace = document.querySelector(".conteudo-input").placeholder = "Your email address...";
    msgErro.style.display = "none"
    console.log({ msgErro })

})