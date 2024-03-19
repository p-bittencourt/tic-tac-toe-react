/** Create the Game Board */

function createGameBoard(size) {
  const row = size;
  const column = size;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => {
    return board;
  };

  const getCell = (row, column) => {
    return board[row - 1][column - 1];
  };

  const tagCell = (row, column, activePlayer) => {
    // tagging the cell with the given player mark
    // remove 1 from the values given to tag the appropriate cell
    board[row - 1][column - 1] = activePlayer.mark;
  };

  const printBoard = () => {
    console.log(board);
  };

  // tagCell(1, 2, "X");
  // tagCell(3, 3, "O");
  // console.log(board);

  return {
    getBoard,
    printBoard,
    tagCell,
    getCell,
  };
}

function Cell() {
  let value = "";

  return value;
}

function PlayerStats(
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
}

/* function RunGame() {
  const board = createGameBoard(3);
  const players = PlayerStats();
  let activePlayer = players[0];

  const makePlay = (row, column) => {
    if (board.getCell(row, column)) {
      console.log("Cell already taken");
    } else {
      board.tagCell(row, column, activePlayer);
      activePlayer === players[0]
        ? (activePlayer = players[1])
        : (activePlayer = players[0]);
    }
  };

  makePlay(1, 2);
  makePlay(3, 3);
  makePlay(1, 1);
  makePlay(3, 1);
  makePlay(1, 2);
  makePlay(3, 2);
  board.printBoard();
}

RunGame(); */

export { createGameBoard, PlayerStats };
