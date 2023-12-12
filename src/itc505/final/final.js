document.addEventListener('DOMContentLoaded', () => {
  const boardSize = 5;
  const maxMoves = 30;
  let moveCount = 0;
  const board = document.getElementById('board');
  const targetMovesElement = document.getElementById('target-moves');
  const remainingMovesElement = document.getElementById('remaining-moves');
  let lightsOutArray = generateLightsOutArray(boardSize);

  
  initializeBoard();

  function initializeBoard() {
    lightsOutArray.forEach((row, rowIndex) => {
      row.forEach((isOn, colIndex) => {
        const cell = document.createElement('div');
        cell.className = `cell ${isOn ? '' : 'is-off'}`;
        cell.addEventListener('click', () => makeMove(rowIndex, colIndex));
        board.appendChild(cell);
      });
    });

    updateMoveCount();
  }

  function makeMove(row, col) {
    if (moveCount >= maxMoves || checkWin()) {
      checkGameOutcome();
      return;
    }

    moveCount++;
    toggleLights(row, col);
    checkGameOutcome();
    updateMoveCount();
  }

  function toggleLights(row, col) {
    lightsOutArray[row][col] = !lightsOutArray[row][col];

    
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (lightsOutArray[row + i] && lightsOutArray[row + i][col + j] !== undefined) {
          lightsOutArray[row + i][col + j] = !lightsOutArray[row + i][col + j];
        }
      }
    }

    updateBoard();
  }

  function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
      cell.className = `cell ${lightsOutArray[Math.floor(index / boardSize)][index % boardSize] ? '' : 'is-off'}`;
    });
  }

  function checkGameOutcome() {
    if (checkWin()) {
      window.alert('You win the game!');
      resetBoard();
    } else if (moveCount >= maxMoves) {
      window.alert('you are done with the 30 moves! better luck next time :(');
      resetBoard();
    }
  }

  function checkWin() {
    return lightsOutArray.every(row => row.every(cell => !cell));
  }

  function resetBoard() {
  window.location.href = window.location.href; 
}




  function generateLightsOutArray(size) {
    return Array.from({ length: size }, () => Array(size).fill(false));
  }

  function updateMoveCount() {
    remainingMovesElement.textContent = `Remaining Moves: ${maxMoves - moveCount}`;
  }

  
  for (let i = 0; i < boardSize * boardSize * 2; i++) {
    const randomRow = Math.floor(Math.random() * boardSize);
    const randomCol = Math.floor(Math.random() * boardSize);
    toggleLights(randomRow, randomCol);
  }
  
  const newGameBtn = document.getElementById('new-game-btn');
  newGameBtn.addEventListener('click', resetBoard);
});
