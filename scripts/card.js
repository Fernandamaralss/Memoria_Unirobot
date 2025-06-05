// scripts/card.js
import { virarCarta } from './game.js';

// Classe que representa uma carta do jogo
export class Carta {
  // Construtor da classe Carta
  constructor(imagem, jogo) {
    this.imagem = imagem;
    this.jogo = jogo;
    this.elemento = this.criarElemento();
    this.elemento.addEventListener('click', () => this.virar());
  }

  // Método para criar o elemento HTML da carta
  criarElemento() {
    const carta = document.createElement('div');
    carta.classList.add('card');
    carta.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back"><img src="${this.imagem}" alt="Imagem da carta"></div>
      </div>`;
    return carta;
  }

  // Método para virar a carta
  virar() {
    virarCarta(this, this.imagem);
  }
}
