export default function validaCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(cpf)
}