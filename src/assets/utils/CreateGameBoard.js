/** Create the Game Board */

function createGameBoard(size) {
  const row = size;
  const column = size;
  const board = [];

  // Create the game board
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i].push("");
    }
  }

  const getSize = () => {
    return size;
  };

  const getBoard = () => {
    return board;
  };

  const getCell = (row, column) => {
    return board[row][column];
  };

  const tagCell = (row, column, activePlayer) => {
    return (board[row][column] = activePlayer.mark);
  };

  return {
    getBoard,
    tagCell,
    getCell,
    getSize,
  };
}

// Function to check for a win
function checkWin(board) {
  let gameOver = false;
  let winningPlayer = "";
  const size = board.getSize();
  const cellChecks = [];
  const winArrayIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Get all cells
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      cellChecks.push(board.getCell(i, j));
    }
  }

  // Check for a win
  for (let i = 0; i < winArrayIndex.length; i++) {
    const [a, b, c] = winArrayIndex[i];
    if (
      cellChecks[a] === "X" &&
      cellChecks[b] === "X" &&
      cellChecks[c] === "X"
    ) {
      gameOver = true;
      winningPlayer = "X";
      break;
    } else if (
      cellChecks[a] === "O" &&
      cellChecks[b] === "O" &&
      cellChecks[c] === "O"
    ) {
      gameOver = true;
      winningPlayer = "O";
      break;
    }
  }

  // Check for a draw
  if (!gameOver && cellChecks.every((cell) => cell !== "")) {
    gameOver = true;
  }

  return [gameOver, winningPlayer];
}

// Define a function to create players
function createPlayers(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const playerOneTag = "X";
  const playerTwoTag = "O";

  const players = [
    { name: playerOneName, mark: playerOneTag },
    { name: playerTwoName, mark: playerTwoTag },
  ];

  return players;
}

export { createGameBoard, checkWin, createPlayers };
