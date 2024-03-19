/** Create the Game Board */

function createGameBoard(size) {
  const row = size;
  const column = size;
  const board = [];
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

  const checkWin = () => {
    let gameOver = false;
    const rowChecks = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        rowChecks.push(getCell(i, j));
      }
    }

    console.log(rowChecks);
    //

    return gameOver;
  };

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i].push("");
    }
  }

  const getBoard = () => {
    return board;
  };

  const getCell = (row, column) => {
    return board[row][column];
  };

  const tagCell = (row, column, activePlayer) => {
    return (board[row][column] = activePlayer.mark);
  };

  const printBoard = () => {
    console.log(board);
  };

  const createPlayers = (
    playerOneName = "Player One",
    playerOneTag = "X",
    playerTwoName = "Player Two",
    playerTwoTag = "O"
  ) => {
    const players = [
      { name: playerOneName, mark: playerOneTag },
      { name: playerTwoName, mark: playerTwoTag },
    ];

    return players;
  };

  return {
    getBoard,
    printBoard,
    tagCell,
    getCell,
    createPlayers,
    checkWin,
  };
}

/* function PlayerStats(
  playerOneName = "Player One",
  playerOneTag = "X",
  playerTwoName = "Player Two",
  playerTwoTag = "O"
) {
  const players = [
    { name: playerOneName, mark: playerOneTag },
    { name: playerTwoName, mark: playerTwoTag },
  ];

  return players; 
} */

export default createGameBoard;
