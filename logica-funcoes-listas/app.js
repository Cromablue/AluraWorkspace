let numeroSecreto = gerarNumeroAleatorio()

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'escolha um número entre 1 e 10';

function exibirTextoNaTela(tag,texto) {
let campo = document.querySelector(tag)
campo.innerHTML = texto
}

exibirTextoNaTela('h1','Jogo do número secreto')
exibirTextoNaTela('p','escolha um número entre 1 e 100')

function verificarChute() {
    console.log(numeroSecreto)
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1)
}