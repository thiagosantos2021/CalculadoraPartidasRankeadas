let hero = [
    { "Vitórias": 150 },
    { "Derrotas": 35 }
];

function calcularSaldoVitorias(vitorias, derrotas) {
    
    var saldoVitorias = vitorias["Vitórias"] - derrotas["Derrotas"];
    return saldoVitorias;
}

let saldoVitoriasHero = calcularSaldoVitorias(hero[0], hero[1]);

function rankingHero(saldoVitorias) {
    if (saldoVitorias <= 10) {
        console.log(`O Herói tem um saldo de ${saldoVitorias}. Está no nível de Ferro.`);
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        console.log(`O Herói tem um saldo de ${saldoVitorias}. Está no nível de Bronze.`);
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        console.log(`O Herói tem um saldo de ${saldoVitorias}. Está no nível de Prata.`);
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        console.log(`O Herói tem um saldo de ${saldoVitorias}. Está no nível de Ouro.`);
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        console.log(`O Herói tem um saldo de ${saldoVitorias}. Está no nível de Diamante.`);
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        console.log(`O Herói tem um saldo de ${saldoVitorias}. Está no nível de Lendário.`);
    } else if (saldoVitorias >= 101) {
        console.log(`O Herói tem um saldo de ${saldoVitorias}. Está no nível de Imortal.`);
    }
}

rankingHero(saldoVitoriasHero);
