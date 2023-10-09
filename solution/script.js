const board = document.getElementById('board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function checkForWinner() {
	const possibleWinningPossibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	for (const possibility of possibleWinningPossibilities) {
		const a = possibility[0];
		const b = possibility[1];
		const c = possibility[2];

		if (boardState[a] !== null) {
			if (boardState[a] === boardState[b]) {
				if (boardState[a] === boardState[c]) {
					return boardState[a];
				}
			}
		}
	}

	if (!boardState.includes('')) {
		return 'Draw';
	}

	return null;
}

function handleCellClick(index) {
	if (gameOver == true || boardState[index].length != 0) {
		return;
	}

	boardState[index] = currentPlayer;
	render();
	const winner = checkForWinner();
	if (winner != null && winner.length != 0) {
		if (winner === 'Draw') {
			message.textContent = "Es ist unentschieden!";
		} else {
			message.textContent = `${winner} hat gewonnen!`;
		}
		gameOver = true;
	} else {
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		message.textContent = `Spieler ${currentPlayer} ist an der Reihe`;
	}
}

function render() {
	board.innerHTML = '';
	for (let i = 0; i < boardState.length; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		cell.textContent = boardState[i];
		cell.addEventListener('click', () => handleCellClick(i));
		board.appendChild(cell);
	}
}

render();