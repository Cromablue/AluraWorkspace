alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log('O número secreto é: ' + numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute =prompt('Escolha um numero entre 1 e 30');
    if (numeroSecreto == chute) {
        alert(`Isso ai! Você descobriu o numero secreto! ${numeroSecreto} com ${tentativas} tentativas.`);
    }   else{
        if (chute < numeroSecreto) {
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
        tentativas++;
    }


}