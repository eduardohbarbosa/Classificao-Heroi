const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let nome = '';
let xp = 0;

readline.question('Qual é seu nome?', name => {
    nome = name
    readline.close()
});

readline.question('Quanta XP  o heroi ?', exp => {
    xp = exp
    readline.close
});

switch (xp) {
    case xp <= 1000:
        console.log(`O Herói de nome ${nome} está no nível de Ferro`)
        break;
    case xp <= 2000:
        console.log(`O Herói de nome ${nome} está no nível de Bronze`)
        break;
    case xp <= 5000:
        console.log(`O Herói de nome ${nome} está no nível de Prata`)
        break;
    case xp <= 7000:
        console.log(`O Herói de nome ${nome} está no nível de Ouro`)
        break;
    case xp <= 8000:
        console.log(`O Herói de nome ${nome} está no nível de Platina`)
        break;
    case xp <= 9000:
        console.log(`O Herói de nome ${nome} está no nível de Ascendente`)
        break;
    case xp <= 10000:
        console.log(`O Herói de nome ${nome} está no nível de Imortal`)
        break;
    case xp > 10000:
        console.log(`O Herói de nome ${nome} está no nível de Radiante`)
        break;
    default:
        break;
}