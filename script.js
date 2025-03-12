const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
let deck = [];

function createDeck() {
    deck = [];
    suits.forEach(suit => {
        ranks.forEach(rank => {
            deck.push(`${rank} of ${suit}`);
        });
    });
}

function dealHand(deck, handSize = 5) {
    const hand = [];
    for (let i = 0; i < handSize; i++) {
        const cardIndex = Math.floor(Math.random() * deck.length);
        hand.push(deck[cardIndex]);
        deck.splice(cardIndex, 1);
    }
    return hand;
}

function displayHand(hand, elementId) {
    const handElement = document.getElementById(elementId);
    handElement.innerHTML = '';
    hand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerText = card;
        handElement.appendChild(cardElement);
    });
}

function determineWinner(playerHand, computerHand) {
    const playerScore = playerHand.reduce((acc, card) => acc + ranks.indexOf(card.split(' ')[0]), 0);
    const computerScore = computerHand.reduce((acc, card) => acc + ranks.indexOf(card.split(' ')[0]), 0);

    if (playerScore > computerScore) {
        return 'Player wins!';
    } else if (playerScore < computerScore) {
        return 'Computer wins!';
    } else {
        return 'It\'s a tie!';
    }
}

document.getElementById('deal-button').addEventListener('click', () => {
    createDeck();
    const playerHand = dealHand([...deck]);
    const computerHand = dealHand([...deck]);

    displayHand(playerHand, 'player-cards');
    displayHand(computerHand, 'computer-cards');

    const result = determineWinner(playerHand, computerHand);
    document.getElementById('result').innerText = result;
});

document.getElementById('draw-button').addEventListener('click', () => {
    createDeck();
    const playerHand = dealHand([...deck]);
    const computerHand = dealHand([...deck]);

    displayHand(playerHand, 'player-cards');
    displayHand(computerHand, 'computer-cards');

    const result = determineWinner(playerHand, computerHand);
    document.getElementById('result').innerText = result;
});