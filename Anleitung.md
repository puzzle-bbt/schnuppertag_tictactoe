# Tic Tac Toe

Wir programmieren zusammen ein Tic Tac Toe.

Auf einem quadratischen, 3×3 Felder großen Spielfeld setzen die beiden Spieler abwechselnd ihr Zeichen (ein Spieler Kreuze, der andere Kreise) in ein freies Feld. Der Spieler, der als Erster drei Zeichen in eine Zeile, Spalte oder Diagonale setzen kann, gewinnt.

# Planung

## Wie viele Spieler hat das Spiel?

.

.

.

**→ Zwei Spieler**

.

## Welche Regeln hat das Spiel?

.

.

.

**→ Die Spieler setzen abwechselnd ihr Zeichen auf ein freies Feld, bis jemand gewonnen hat.**  
**→ Ein Spieler hat gewonnen, wenn er drei seiner Zeichen in eine Zeile, Spalte oder Diagonale gesetzt hat.**

.

## Welche Situationen beenden das Spiel?

.

.

.

**→ Ein Spieler hat gewonnen**  
**→ Es hat keine freien Felder.**

.

## Wie viele verschiedene Endzustände existieren?

.

.

.

**→ Spieler X gewinnt**  
**→ Spieler O gewinnt**  
**→ Es ist unentschieden**

.

---

# Umsetzung
Wie können wir dies dem Computer beibringen?

## Spielfeld zeichnen
* Man könnte das Spielfeld als statischen HTML Code umsetzen.
* Wir können das Spielfeld auch generieren:
 
Funktion `render()`

## Spielen
* Die Spieler setzen abwechselnd ihr Zeichen in ein freies Feld.
* Wir haben die Funktion handleCellClick(), welche beim Klick auf eine Feld ausgeführt wird. 

Was müssen wir Programmieren?

  1. Ist das Spiel zu Ende?
  2. Ist die Zelle frei?
  3. Das Setzen im Spielstand speichern.
  4. Das Spielfeld aktualisieren
  5. Überprüfen, ob das Spiel jetzt zu Ende ist
    * → Den Spielstatus (gameState) setzen
  6. Meldung aktualisieren

## Spielende feststellen

* Wie können wir feststellen, dass das Spiel zu Ende ist?
  * Ein Spieler hat drei seiner Zeichen in eine Zeile, Spalte oder Diagonale gesetzen.
  * Es hat keine freien Felder.
* Wie viele Gewinnmöglichkeiten existieren?
  * drei horizontal
  * drei vertikal
  * zwei diagonal

```bash
    possibleWinningPossibilities = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonal
```

* Die Funktion `checkForWinner()` überprüft, ob ein Spieler gewonnen hat oder das Spiel unentschieden ist, oder ob weitergespielt werden darf.

Was müssen wir Programmieren?
* Liegt eine Gewinnmöglichkeit vor?
  * Ja → Wer ist der Sieger?
* Falls nicht, hat es noch leere Felder?
  * Ja → weiterspielen
  * Nein → Unentschieden

