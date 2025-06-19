alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log('O número secreto é: ' + numeroSecreto);
let chute =prompt('Escolha um numero entre 1 e 30')

if (numeroSecreto == chute) {
    console.log('Isso ai! Você descobriu o numero secreto! (29)')
}   else{
    alert('Você errou :(')
}