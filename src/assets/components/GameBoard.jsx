import React, { useState } from "react";
import createGameBoard from "../utils/CreateGameBoard";

export const GameBoard = () => {
  const [board, setBoard] = useState(createGameBoard(3));
  const players = board.createPlayers();
  const [activePlayer, setActivePlayer] = useState(players[0]);

  const restartGame = () => {
    setBoard(createGameBoard(3));
    setActivePlayer(players[0]);
  };

  const handleEndGame = () => {
    const [gameOver, winner] = board.checkWin();
    if (gameOver && winner) {
      alert(`${activePlayer.name} wins!`);
      restartGame();
    } else if (gameOver) {
      alert("It's a tie!");
      restartGame();
    }
  };

  const renderBoard = () => {
    return (
      <div className="board">
        {board.getBoard().map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, columnIndex) => (
              <div
                key={columnIndex}
                className="cell"
                onClick={() => {
                  makePlay(rowIndex, columnIndex);
                  handleEndGame();
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const makePlay = (row, column) => {
    if (board.getCell(row, column)) {
      alert("Cell already taken");
    } else {
      board.tagCell(row, column, activePlayer);
      activePlayer.mark === "X"
        ? setActivePlayer(players[1])
        : setActivePlayer(players[0]);
    }
  };

  return (
    <>
      <div className="container text-center">{renderBoard()}</div>
    </>
  );
};
