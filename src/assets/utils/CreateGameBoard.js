/** Create the Game Board */

function createGameBoard(size) {
  const row = size;
  const column = size;
  const board = [];

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
