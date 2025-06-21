alert('Boas vindas ao jogo do número secreto');
let limite = 100;
let numeroSecreto = parseInt(Math.random() * limite + 1);
console.log('O número secreto é: ' + numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute =prompt(`Escolha um numero entre 1 e ${limite}`);
    if (numeroSecreto == chute) {
        break;
    }   else{
        if (chute < numeroSecreto) {
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso ai! Vocé descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Vocé descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// }else {
//     alert(`Isso ai! Vocé descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }

