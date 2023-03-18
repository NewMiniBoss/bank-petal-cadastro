import validaCpf from "./validaCpf.js";
import validaNascimento from "./validaIdade.js";

const cadastroForms = document.querySelectorAll('[required]')

cadastroForms.forEach((elemento) => {
    elemento.addEventListener('blur', () => {
        verificaInput(elemento);
    })
    elemento.addEventListener('invalid', evento => {
        evento.defaultPrevented();
    })
})

const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customErros'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaInput(campo) {
    let mensagem = '';
    if (campo.name == "cpf" && campo.value.length >= 11) {
        validaCpf(campo);
    }
    if (campo.name == "aniversario" && campo.value != '') {
        validaNascimento(campo)
    }
    tiposDeErros.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
}