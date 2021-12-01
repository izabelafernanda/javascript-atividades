
var taxas;
var paisA;
var paisB;
var taxab;
var ano = 0;

// Digite a porcentagem no formato decimal!! exemplo: 0.3 (3%)
// Utilizei o parseFloat, pq o prompt retorna apenas texto. O parseFloat é para digitar os números.  ;)

paisA = parseFloat(window.prompt("Digite o número de habitantes de A: "))
paisB = parseFloat(window.prompt("Digite o número de habitantes de B: "))
taxas = parseFloat(window.prompt("Digite uma taxa de crescimento de A: "))
taxab = parseFloat(window.prompt("Digite uma taxa de crescimento de B: "))

while (paisA > paisB) {
    console.log("A não pode ser maior que B, digite novamente. ")
    paisA = parseFloat(window.prompt("Digite o número de habitantes de A: "))
    paisB = parseFloat(window.prompt("Digite o número de habitantes de B: "))

}

while (paisA <= paisB) {

    paisA += paisA * taxas
    paisB += paisB * taxab
    ano += 1
}

console.log("A irá ultrapassar ou igualar a B em %d anos", ano)

