import React, { useState } from "react";
import { createGameBoard, PlayerStats } from "../utils/CreateGameBoard";

export const GameBoard = () => {
  // const boardInit = createGameBoard(3);
  const players = PlayerStats();
  const [board, setBoard] = useState(createGameBoard(3));
  const [activePlayer, setActivePlayer] = useState(players[0]);

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
      // console.log(activePlayer);
      // board.printBoard();
    }
  };

  return (
    <>
      <div className="container text-center">{renderBoard()}</div>
    </>
  );
};
