var a = 80000;
var b = 200000;
var ano = 0;

while (a <= b) {

    a += a * 0.03
    b += b * 0.015
    ano += 1
}

console.log("A irá ultrapassar ou igualar a B em %d anos", ano)

