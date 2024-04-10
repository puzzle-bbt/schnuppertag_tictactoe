const board = document.getElementById('board');
const message = document.getElementById('message');

let gameState = 'playing' // playing, draw, X, O
let currentPlayer = 'X';

let boardState = ['', '', '', '', '', '', '', '', ''];
const possibleWinningPossibilities = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

function render() {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = boardState[i];
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }
}

function handleCellClick(index) {
    if (gameState !== 'playing'
        || boardState[index] !== '') {
        return;
    }
    boardState[index] = currentPlayer;
    render();
    checkForWinner();

    console.log('boardState:', boardState);
    console.log('gameState:', gameState);

    if (gameState === 'draw') {
        message.textContent = "Es ist unentschieden!";
    } else if (gameState === 'playing') {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Spieler ${currentPlayer} ist an der Reihe`;
    } else {
        message.textContent = `Spieler ${gameState} hat gewonnen!`;
    }
}

function checkForWinner() {
    for (const possibility of possibleWinningPossibilities) {
        const symbol1 = boardState[possibility[0]];
        const symbol2 = boardState[possibility[1]];
        const symbol3 = boardState[possibility[2]];

        if (symbol1 !== ''
            && symbol1 === symbol2
            && symbol1 === symbol3
        ) {
            gameState = symbol1;
            return;
        }
    }

    if (!boardState.includes('')) {
        gameState = 'draw'
    }
}

render();
message.textContent = `Spieler ${currentPlayer} ist an der Reihe`;