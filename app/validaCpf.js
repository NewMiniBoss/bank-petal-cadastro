export default function validaCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if (validaNumeroRepetidos(cpf) || validaPenultimoNumeroCpf(cpf) || validaUltimoNumeroCpf(cpf)) {
        console.log('CPF inválido');
    } else {
        console.log('CPF válido');
    }
}

function validaNumeroRepetidos(cpf) {
    const numeroRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numeroRepetidos.includes(cpf);
}

function validaPenultimoNumeroCpf(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaUltimoNumeroCpf(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}