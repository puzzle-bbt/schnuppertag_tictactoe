const board = document.getElementById('board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function checkForWinner() {
	console.log(boardState);
	// TODO passe dieses Array an, damit die verschiedenen Möglichkeiten durchgelaufen werden können
	const possibleWinningPossibilities = [];

	for (const possibility of possibleWinningPossibilities) {
		if (boardState[possibility[0]] === boardState[possibility[1]]) {
			if (boardState[possibility[0]] === boardState[possibility[2]]) {

				return // Gib hier den Gewinner zurück;
			}
		}
	}

	if (!boardState.includes('')) {
		return 'Unentschieden';
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
		if (winner === 'Unentschieden') {
			message.textContent = "Es ist unentschieden!";
		} else {
			message.textContent = winner + ` hat gewonnen!`;
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