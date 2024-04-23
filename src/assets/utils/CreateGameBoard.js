/** Create the Game Board */

export default function createGameBoard(size) {
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
