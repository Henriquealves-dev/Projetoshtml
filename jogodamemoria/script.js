// Configurações iniciais
const cards = [
    { id: 1, image: '🍎' },
    { id: 2, image: '🍌' },
    { id: 3, image: '🍇' },
    { id: 4, image: '🍓' },
    { id: 5, image: '🍍' },
    { id: 6, image: '🥝' }
];

// Duplica e embaralha as cartas
const cardSet = [...cards, ...cards].sort(() => Math.random() - 0.5);

// Seletores de elementos
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const chancesDisplay = document.getElementById('chances');

// Variáveis do jogo
let flippedCards = [];
let score = 0;
let chances = 3;

// Atualiza a pontuação e chances na tela
function updateDisplay() {
    scoreDisplay.textContent = `Pontuação: ${score}`;
    chancesDisplay.textContent = `Chances restantes: ${chances}`;
}

// Cria as cartas no tabuleiro
function createBoard() {
    gameBoard.innerHTML = '';
    cardSet.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = card.image;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);
        gameBoard.appendChild(cardElement);

        cardElement.addEventListener('click', handleCardClick);
    });

    // Mostra todas as cartas no início
    showAllCards();
}

// Mostra todas as cartas por um tempo no início do jogo
function showAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('flipped'));

    // Vira as cartas após 3 segundos
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
    }, 3000); // 3000ms = 3 segundos
}

// Lógica ao clicar na carta
function handleCardClick(event) {
    const card = event.currentTarget;

    if (card.classList.contains('flipped') || flippedCards.length === 2) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Verifica se as cartas combinam
function checkMatch() {
    const [card1, card2] = flippedCards;
    const id1 = card1.dataset.id;
    const id2 = card2.dataset.id;

    if (id1 === id2) {
        score += 3;
        flippedCards = [];
    } else {
        score = Math.max(0, score - 2);
        chances--;

        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }

    updateDisplay();
    checkGameOver();
}

// Verifica se o jogo acabou
function checkGameOver() {
    if (chances === 0) {
        alert('Você perdeu! Tente novamente.');
        resetGame();
    } else if (document.querySelectorAll('.card:not(.flipped)').length === 0) {
        alert('Parabéns! Você venceu o jogo!');
        resetGame();
    }
}

// Reinicia o jogo
function resetGame() {
    score = 0;
    chances = 3;
    flippedCards = [];
    cardSet.sort(() => Math.random() - 0.5);
    createBoard();
    updateDisplay();
}

// Inicializa o jogo
createBoard();
updateDisplay();
// Verifica se o jogo acabou
function checkGameOver() {
    // Verifica se todas as cartas estão viradas (nenhuma carta sem a classe 'flipped')
    const allFlipped = document.querySelectorAll('.card:not(.flipped)').length === 0;

    if (allFlipped) {
        setTimeout(() => {
            alert('Parabéns! Você venceu o jogo!');
            resetGame();
        }, 500); // Pequeno atraso para garantir que a última carta seja exibida
    } else if (chances === 0) {
        setTimeout(() => {
            alert('Você perdeu! Tente novamente.');
            resetGame();
        }, 500);
    }
}
