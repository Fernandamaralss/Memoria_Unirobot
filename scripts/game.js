// scripts/game.js
import { imagensDuplicadas, containerDoJogo, elementoPontuacao, elementoMovimentos, embaralharArray, config } from './config.js';
import { Carta } from './card.js';

let cartasSelecionadas = [];
let paresCorrespondentes = 0;
let movimentos = 0;
let tempoRestante = config.tempo;
let intervalo = null;
let jogoIniciado = false; // Flag para controlar o início do jogo

// Função para criar uma nova carta
export const criarCarta = imagem => {
  const carta = new Carta(imagem, {
    virarCarta: virarCarta,
    elementoMovimentos: elementoMovimentos,
    elementoPontuacao: elementoPontuacao
  });
  return carta.elemento;
};

// Função para formatar o tempo (minutos:segundos)
const formatarTempo = segundos => {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${minutos}:${segundosRestantes.toString().padStart(2, '0')}`;
};

// Função para virar uma carta (só funciona se o jogo já iniciou)
export const virarCarta = (carta, imagem) => {
  if (!jogoIniciado) return; // Bloqueia jogadas antes do início do jogo

  if (!carta.elemento.classList.contains('flipped') && cartasSelecionadas.length < 2) {
    carta.elemento.classList.add('flipped');
    cartasSelecionadas.push({ carta, imagem });

    if (cartasSelecionadas.length === 2) {
      movimentos++;
      elementoMovimentos.textContent = `Movimentos: ${movimentos}`;
      setTimeout(verificarCorrespondencia, 500);
    }
  }
};

// Função para verificar correspondência entre duas cartas selecionadas
export const verificarCorrespondencia = () => {
  const [carta1, carta2] = cartasSelecionadas;

  if (carta1.imagem === carta2.imagem) {
    cartasSelecionadas = [];
    paresCorrespondentes++;
    elementoPontuacao.textContent = `Pontos: ${paresCorrespondentes}`;

    if (paresCorrespondentes === imagensDuplicadas.length / 2) {
      mostrarParabens();
    }
  } else {
    setTimeout(() => {
      carta1.carta.elemento.classList.remove('flipped');
      carta2.carta.elemento.classList.remove('flipped');
      cartasSelecionadas = [];
    }, 500);
  }
};

// Função para inicializar o jogo
export const inicializarJogo = () => {
  cartasSelecionadas = [];
  paresCorrespondentes = 0;
  movimentos = 0;
  tempoRestante = config.tempo;
  jogoIniciado = false; // O jogo ainda não começou

  elementoPontuacao.textContent = 'Pontos: 0';
  elementoMovimentos.textContent = `Movimentos: ${movimentos}`;

  containerDoJogo.innerHTML = '';
  containerDoJogo.style.gridTemplateColumns = `repeat(${config.gridColumns}, 1fr)`;

  const imagensEmbaralhadas = embaralharArray(imagensDuplicadas);
  imagensEmbaralhadas.forEach(imagem => {
    const carta = criarCarta(imagem);
    containerDoJogo.appendChild(carta);
  });

  document.getElementById("valorTempo").textContent = formatarTempo(tempoRestante);
};

// Função para exibir o modal de "Parabéns"
const mostrarParabens = () => {
  clearInterval(intervalo);
  intervalo = null;
  const congratsModal = document.getElementById('congrats-modal');
  const congratsMessage = document.getElementById('congrats-message');
  congratsMessage.textContent = `Você encontrou todos os pares em ${movimentos} movimentos.`;
  congratsModal.style.display = 'block';
};

// Função para exibir o modal de "Game Over"
const mostrarGameOver = () => {
  clearInterval(intervalo);
  intervalo = null;
  const gameOverModal = document.getElementById('game-over-modal');
  const gameOverMessage = document.getElementById('game-over-message');
  gameOverMessage.textContent = `Você perdeu! Tente novamente.`;
  gameOverModal.style.display = 'block';
};

// Função para redirecionar para a página de níveis
const voltarParaNivel = () => {
  window.location.href = 'niveis.html';
};

// Função para iniciar a contagem regressiva do tempo
export const IniciarTempo = () => {
  // Impede iniciar o timer se já estiver rodando ou se algum modal estiver visível
  if (intervalo !== null || modalVisivel()) return;

  clearInterval(intervalo);
  document.getElementById("valorTempo").textContent = formatarTempo(tempoRestante);

  intervalo = setInterval(() => {
    tempoRestante--;
    document.getElementById("valorTempo").textContent = formatarTempo(tempoRestante);

    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      intervalo = null;
      mostrarGameOver();
    }
  }, 1000);
};

// Função auxiliar para verificar se algum modal está visível
const modalVisivel = () => {
  const congratsModal = document.getElementById('congrats-modal');
  const gameOverModal = document.getElementById('game-over-modal');
  return congratsModal.style.display === 'block' || gameOverModal.style.display === 'block';
};

// Expondo funções globais para acesso via HTML
window.voltarParaNivel = voltarParaNivel;
window.IniciarTempo = IniciarTempo;

// Ao carregar a página: inicializa o jogo, mostra o preview das cartas e inicia o tempo após 1 segundo
window.addEventListener('load', () => {
  inicializarJogo();
  
  // Desabilita interações durante o preview
  containerDoJogo.style.pointerEvents = 'none';
  const todasAsCartas = document.querySelectorAll('.card');
  
  // Mostra todas as cartas para o preview
  todasAsCartas.forEach(carta => carta.classList.add('flipped'));
  setTimeout(() => {
    todasAsCartas.forEach(carta => carta.classList.remove('flipped'));
    containerDoJogo.style.pointerEvents = 'auto';
    jogoIniciado = true; // Ativa o jogo após o preview
    IniciarTempo();
  }, 1000);
});

// Adicionando event listeners para os botões e modais
document.addEventListener('DOMContentLoaded', () => {
  // Botão de voltar para níveis
  const voltarButton = document.getElementById("voltarButton");
  voltarButton.addEventListener('click', voltarParaNivel);

  // Botões para voltar para a tela inicial a partir dos modais
  document.getElementById("voltarIndexButton").addEventListener('click', voltarParaNivel);
  document.getElementById("voltarIndexButtonOver").addEventListener('click', voltarParaNivel);
});
