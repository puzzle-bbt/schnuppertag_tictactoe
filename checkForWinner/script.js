const board = document.getElementById('board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function checkForWinner() {
	// TODO was muss hier gemacht werden, damit wir einen Gewinner feststellen können?
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
			// TODO teile dem Benutzer mit, dass es unentschieden ist
		} else {
			// TODO teile dem Benutzer mit, wer gewonnen hat
		}
		gameOver = true;
	} else {
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		// TODO teile dem Benutzer mit, welcher Spieler an der Reihe ist
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