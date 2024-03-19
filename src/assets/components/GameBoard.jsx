import React from "react";
import { createGameBoard, PlayerStats } from "../utils/CreateGameBoard";

export const GameBoard = () => {
  const board = createGameBoard(3);
  const players = PlayerStats();
  let activePlayer = players[0];

  const renderBoard = () => {
    return (
      <div className="board">
        {board.getBoard().map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, columnIndex) => (
              <div key={columnIndex} className="cell">
                X
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

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

  return (
    <>
      <div className="container text-center">{renderBoard()}</div>
    </>
  );
};
