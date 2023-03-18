import validaCpf from "./validaCpf.js";
import validaNascimento from "./validaNascimento.js";

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
    if (campo.name == "aniversario" && campo.value != '') {
        validaNascimento(campo)
    }
}