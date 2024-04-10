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
    // Spielstand: gameState
    // Brettstatus: boardState
    // aktueller Spieler: currentPlayer
    // message.textContent = "Test zum Anzeigen"

    // 1) Ist das Spiel zu Ende
    // 2) Hat keine freien Zellen
    if () {
        return;
    }

    // 3) Das Setzen des Spielers im Spielstand speichern.
    boardState[...] = ...

    // 4) Das Spielfeld aktualisieren
    //-->

    // 5) Überprüfen ob das Spiel jetzt zu Ende ist -> Den Spielstatus (gameState) setzen.
    //-->

    console.log('boardState:', boardState);
    console.log('gameState:', gameState);

    //Spielstand (gameState) überprüfen und jeweilige message setzen
    //draw ("Es ist unentschieden")
    if () {
    //playing ("Spieler ... ist an der Reihe")
    } else if () {
        //Wechselt Spieler
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    //Spieler hat gewonnen ("Spieler ... hat gewonnen")
    } else {
    }
}

function checkForWinner() {
    //Durch Gewinnmöglichkeiten loopen
    for (const possibility of possibleWinningPossibilities) {
        //Möglichkeiten auslesen
        const symbol1 = ...
        const symbol2 = ...
        const symbol3 = ...

        //Symbol ist nicht leer und alle Symbole sind gleich
        if () {
            //Gewinner im Spielstatus setzen
            //-->
            return;
        }
    }

    //Wenn der Brettstatus kein leeres Feld mehr beinhaltet, den Spielstatus auf untentschieden setzen
    if () {
    }
}

render();
message.textContent = `Spieler ${currentPlayer} ist an der Reihe`;