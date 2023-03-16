import validaCpf from "./validaCpf.js";

const cadastroForms = document.querySelectorAll('[required]')

cadastroForms.forEach((elemento) => {
    elemento.addEventListener('blur', () => {
        verificaInput(elemento);
    })
})

function verificaInput(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        validaCpf(campo);
    }
}