export default function validaNascimento(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento)

    return console.log(validaIdade)
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMaiorDeIdade = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMaiorDeIdade;
}