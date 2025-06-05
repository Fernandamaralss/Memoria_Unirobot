// scripts/niveis.js

document.addEventListener('DOMContentLoaded', () => {
    const levelButtons = document.querySelectorAll('#initial-container button[data-level]');
    const voltarButton = document.getElementById('voltarButton');
  
    // Evento para escolher o nível
    levelButtons.forEach(button => {
      button.addEventListener('click', () => {
        const level = button.getAttribute('data-level');
        window.location.href = `game.html?nivel=${level}`;
      });
    });
  
    // Evento para voltar para a página inicial
    voltarButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  });
  