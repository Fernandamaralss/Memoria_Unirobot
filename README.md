## Jogo da Memória da Unirobot

Bem-vindo ao **Jogo da Memória da Unirobot**, um jogo da memória desenvolvido em HTML, CSS e JavaScript puro, com sistema de níveis, tempo, pontuação e interface responsiva. O objetivo é encontrar os pares de cartas antes que o tempo acabe!

---

## 📂 Estrutura do Projeto

```

.
├── imagens/
│   ├── 1.jpeg ... 12.jpeg  (Imagens das cartas)
│   ├── celebration.png     (Imagem de vitória)
│   └── loss.png            (Imagem de derrota)
│
├── scripts/
│   ├── card.js             (Classe Carta e lógica de virar carta)
│   ├── config.js           (Configuração dos níveis e embaralhamento)
│   ├── game.js             (Lógica principal do jogo)
│   ├── index.js            (Lógica da tela inicial)
│   └── niveis.js           (Lógica de escolha de nível)
│
├── styles/                 (Pastas de estilos CSS)
│
├── game.html               (Tela principal do jogo)
├── index.html              (Tela inicial)
└── niveis.html             (Tela de seleção de nível)

````

---

## 🎯 Objetivo do Jogo

O desafio consiste em encontrar todos os pares de cartas no menor número de movimentos e dentro do tempo limite definido para cada nível.

---

## 🚀 Como Jogar

1. **Inicie o jogo:** Clique em "Iniciar" na tela inicial.
2. **Escolha o nível:** Fácil, Médio ou Difícil.
3. **Memorize:** Durante o preview rápido, as cartas serão exibidas brevemente.
4. **Encontre os pares:** Clique nas cartas para virar e tentar formar pares.
5. **Pontuação:** Cada par correto aumenta sua pontuação. Os movimentos também são contabilizados.
6. **Fim de jogo:** Se todos os pares forem encontrados, aparece uma tela de parabéns. Se o tempo acabar, aparece uma tela de game over.

---

## 🧩 Níveis Disponíveis

| Nível   | Nº de Pares | Tempo (segundos) | Colunas |
|---------|-------------|------------------|---------|
| Fácil   | 3 pares     | 20s              | 3       |
| Médio   | 6 pares     | 35s              | 4       |
| Difícil | 12 pares    | 60s              | 6       |

As imagens das cartas são duplicadas e embaralhadas a cada nova partida.

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (ícones)

---

## 🔑 Funcionalidades Implementadas

- ✅ Sistema de níveis com dificuldade progressiva
- ✅ Cronômetro e controle de tempo
- ✅ Contagem de movimentos e pontuação
- ✅ Tela de vitória e derrota com imagens personalizadas
- ✅ Pré-visualização rápida das cartas no início de cada rodada
- ✅ Código modularizado em múltiplos arquivos JS
- ✅ Totalmente funcional sem bibliotecas externas (apenas JS puro)



## 💻 Como rodar o projeto

Basta abrir o arquivo `index.html` no seu navegador preferido. Não há necessidade de servidor ou instalação de dependências.

```bash
1. Instale a extensão Live Server no VSCode
2. Clique com botão direito em index.html -> "Open with Live Server"
````

---

## ✨ Melhorias Futuras

* Adicionar níveis extras (modo infinito ou modo cronometrado)
* Adicionar sons de interação

---
