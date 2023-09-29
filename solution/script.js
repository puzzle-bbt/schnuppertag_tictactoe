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

	for (const combo of possibleWinningPossibilities) {
		const [a, b, c] = combo;
		if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
			return boardState[a];
		}
	}

	if (!boardState.includes('')) {
		return 'Draw';
	}

	return null;
}

function handleCellClick(index) {
	if (gameOver || boardState[index]) return;

	boardState[index] = currentPlayer;
	render();
	const winner = checkForWinner();
	if (winner) {
		if (winner === 'Draw') {
			message.textContent = "It's a Draw!";
		} else {
			message.textContent = `${winner} wins!`;
		}
		gameOver = true;
	} else {
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		message.textContent = `Player ${currentPlayer}'s turn`;
	}
}

function render() {
	board.innerHTML = '';
	for (let i = 0; i < boardState.length; i++) {
		console.log(boardState);
		console.log(boardState[i]);
		const cell = document.createElement('div');
		cell.classList.add('cell');
		cell.textContent = boardState[i];
		cell.addEventListener('click', () => handleCellClick(i));
		board.appendChild(cell);
	}
}

render();