// scripts/config.js

// Obter o nível a partir da URL
const urlParams = new URLSearchParams(window.location.search);
export const nivel = urlParams.get('nivel') || 'facil';

// Configurações para cada nível
const niveisConfig = {
  facil: {
    imagens: [
      'imagens/1.png',
      'imagens/2.png',
      'imagens/3.png'
    ],
    tempo: 20,
    gridColumns: 3
  },
  medio: {
    imagens: [
      'imagens/1.png',
      'imagens/2.png',
      'imagens/3.png',
      'imagens/4.png',
      'imagens/5.png',
      'imagens/6.png'
    ],
    tempo: 35,
    gridColumns: 4
  },
  dificil: {
    imagens: [
      'imagens/1.png',
      'imagens/2.png',
      'imagens/3.png',
      'imagens/4.png',
      'imagens/5.png',
      'imagens/6.png',
      'imagens/7.png',
      'imagens/8.png',
      'imagens/9.png',
      'imagens/10.png',
      'imagens/11.png',
      'imagens/12.png'
    ],
    tempo: 60,
    gridColumns: 6
  }
};

export const config = niveisConfig[nivel];

// Arrays de imagens duplicadas
export const imagensDuplicadas = [...config.imagens, ...config.imagens];

// Contêiner do jogo no HTML
export const containerDoJogo = document.getElementById('game-container');

// Marcador de pontuação no HTML
export const elementoPontuacao = document.getElementById('score');

// Contador de movimentos no HTML
export const elementoMovimentos = document.getElementById('moves');

// Função para embaralhar o array
export const embaralharArray = array => array.sort(() => Math.random() - 0.5);
