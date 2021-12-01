// Situação problema corrigida. 
// Grupo: Izabela Fernanda, Liliane Ferreira, Samara Fogaça, Wesley Machado. 

function calculaIRPF(salario, inss, dependentes) {
    let irpfBase = salario - inss - (dependentes*189.59);
    if (irpfBase <= 1903.98) {
        return 0;
    } else if (irpfBase >= 1903.98 && irpfBase <= 2826.65) {
        return irpfBase * 0.075 - 142.80
    } else if (irpfBase >= 2826.66 && irpfBase <= 3751.05) {
        return (irpfBase * 0.15) - 354.80
    } else if (irpfBase >= 3751.06 && irpfBase <= 4664.68) {
        return irpfBase * 0.225 - 636.13

    } else if (irpfBase >= 4664.68) {
        return irpfBase * 0.275 - 869.36
    }
}

function calculaINSS(salario) {
    let inss
    if (salario >= 6433.57) {
        inss = 751.99
    }
    else if (salario >= 3305.23) {
        inss = (1100 * 0.075 + 1103 * 0.09 + 1101.74 * 0.12 + (salario - 3305.23) * 0.14)
    }
    else if (salario >= 2203.49) {
        inss = (1100 * 0.075 + 1103.48 * 0.09 + (salario - 2203.49) * 0.12)
    }
    else if (salario >= 1100.01) {
        inss = (1100 * 0.075 + (salario - 1100.01) * 0.09)
    }
    else if (salario <= 1100) {
        inss = (salario * 0.075)
    }
    return inss;
}

function calculoFerias(salario) {
    return salario + salario / 3;

}
function calculaValetransporte(salario) {
    var valeTransporte = 0.06;
    return salario * valeTransporte;
}
function calculaDecimoterceiro(salario, mesesTrabalhados) {
    return salario / 12 * mesesTrabalhados;
}
function main(nome, salario, mesesTrabalhados,dependentes) {
    console.log(`Salario bruto ${salario}`);
    let valetransporte = calculaValetransporte(salario);
    console.log(`Vale transporte do ${nome}: ${(valetransporte).toFixed(2)}`);
    let inss = calculaINSS(salario);
    console.log(`INSS do ${nome}: ${inss.toFixed(2)}`);
    let irpf = calculaIRPF(salario, inss, dependentes);
    console.log(`IRPF do ${nome}: ${irpf.toFixed(2)}`);
    let totaldesconto = valetransporte + inss + irpf;
    console.log(`Total Descontos de ${nome}: ${(totaldesconto).toFixed(2)}`);
    console.log(`Salário líquido de ${nome}: ${(salario - totaldesconto).toFixed(2)}`);
    let dec13 = calculaDecimoterceiro(salario, mesesTrabalhados);
    let ferias = calculoFerias(salario, mesesTrabalhados);
    console.log(`13 + Férias do ${nome}: ${(dec13 + ferias).toFixed(2)}`);
    console.log(`CÁLCULO IRPF (13º+FÉRIAS) do ${nome}: ${(19.66 + irpf + irpf).toFixed(2)}`);
}



// Nome do funcionário, salário, meses trabalhados e dependentes. 

main("Fernando", 2968, 12, 0);
// main("João", 4001, 11, 0);
// main("Amanda", 3507, 11, 0);
// main("Juliana", 4843, 12, 0);
// main("Kelly", 3914, 12, 0);
// main("hellen", 2965, 12, 0);
