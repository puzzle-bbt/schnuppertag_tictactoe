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
    // Spielstand: gameState | Mögliche Zustände: playing, draw, X, O
    // Brettstatus: boardState
    // Aktueller Spieler: currentPlayer | Mögliche Zustände: X, O
    // message.textContent = "Text der angezeigt werden soll"

    // Aufgabe 1) Ersetze true mit einer Überprüung ob das Spiel noch am laufen ist bzw. nicht zu Ende ist
    // Aufgabe 2) Erweitere die Prüfung aus Aufgabe 1 und Prüfe ob die momentan angeklickte Zelle schon besetzt ist.
    // Hinweis: Damit die Bedingung erfüllt ist, soll nur eine der beiden Konditionen zutreffen müssen.
    if (true) {
        return;
    }

    // Aufgabe 3) Speichere den Zug des aktuellen Spielers an der korrekten Stelle im boardState array um den Spielstatus
    // zu aktualisieren.
    // boardState[...] = ...

    // Aufgabe 4) Rufe die Funktion auf, welche das board für den Benutzer visuell aktualisiert, damit die Spieler feedback erhalten.
    //-->

    // Aufgabe 5) Rufe die Funktion auf, welche überprüft ob ein Spieler gewonnen hat.
    //-->

    // Zeigt den Status in der Browser-Konsole an.
    console.log('boardState:', boardState);
    console.log('gameState:', gameState);

    // Aufgabe 9) Setze die Nachricht die den Spielern angezeigt wird falls das Spiel zu Ende ist.

    // Ersetze hier true durch eine Überprüfung ob der gameState unentschieden (draw) ist.
    // Wenn ja, setze die Nachricht auf: "Es ist unentschieden!"
    if (true) {

    // Ersetze hier true durch eine Überprüfung ob der gameState sagt, dass das Spiel noch läuft.
    // Wenn ja, setze die Nachricht nach dem Spielerwechsel auf "Spieler ... ist an der Reihe". Ersetze ... durch den Spieler
    // der auch wirklich an der Reihe ist.
    } else if (true) {
        //Wechselt Spieler
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // Wenn oben beides nicht zutrifft, dann können wir davon ausgehen, dass ein Spieler gewonnen hat. Lies den Gewinner aus dem
    // gameState aus und zeige die Nachricht "Spieler ... hat gewonnen!" an. Ersetze ... durch den Spieler der gewonnen hat.
    } else {
    }
}

function checkForWinner() {
    //Durch Gewinnmöglichkeiten loopen
    for (const possibility of possibleWinningPossibilities) {
        // Aufgabe 6) possibility ist pro durchgang des loops jeweils einer der Einträge im possibleWinningPossibilities
        // Array. Lese nun aus dem boardState die drei Symbole aus, die sich bei den drei Positionen der momentanen possibilty
        // befinden. Denke daran: possibilty ist auch ein array.

        // const symbol1 = boardState[...]
        // const symbol2 = boardState[...]
        // const symbol3 = boardState[...]

        // Aufgabe 7) Überprüfe nun ob jemand gewonnen hat. Ersetze dafür true durch eine Überprüfung ob die Symbole
        // nicht leer ('') sind und ob alle drei Symbole die Gleichen sind.
        if (true) {
            // Aufgabe 8) Speichere das Symbol des Gewinners im gameState
            // ->
            return;
        }
    }

    if (!boardState.includes('')) {
        gameState = 'draw'
    }
}

render();
message.textContent = `Spieler ${currentPlayer} ist an der Reihe`;