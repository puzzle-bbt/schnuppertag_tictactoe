const board = document.getElementById('board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function checkForWinner() {
	// TODO was muss hier gemacht werden, damit wir einen Gewinner feststellen können?
}

function handleCellClick(index) {
	if (gameOver || boardState[index]) {
		return;
	}

	boardState[index] = currentPlayer;
	render();
	const winner = checkForWinner();
	if (winner) {
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