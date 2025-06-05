// scripts/index.js

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const instrucaoButton = document.getElementById('instrucao');
    const closeInstructionButton = document.getElementById('closeInstruction');
    const instructionDiv = document.getElementById('displayInstruction');
  
    // Evento para iniciar o jogo
    startButton.addEventListener('click', () => {
      window.location.href = 'niveis.html';
    });
  
    // Evento para mostrar/ocultar instruções
    instrucaoButton.addEventListener('click', () => {
      if (instructionDiv.style.display === 'none' || instructionDiv.style.display === '') {
        instructionDiv.style.display = 'block';
      } else {
        instructionDiv.style.display = 'none';
      }
    });
  
    // Evento para fechar as instruções
    closeInstructionButton.addEventListener('click', () => {
      instructionDiv.style.display = 'none';
    });
  });
  