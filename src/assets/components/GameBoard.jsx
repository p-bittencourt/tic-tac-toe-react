import React, { useState } from "react";
import createGameBoard from "../utils/CreateGameBoard";
import createPlayers from "../utils/CreatePlayers";
import checkWin from "../utils/CheckWin";

export const GameBoard = () => {
  const [board, setBoard] = useState(createGameBoard(3));
  const players = createPlayers();
  const [activePlayer, setActivePlayer] = useState(players[0]);

  const restartGame = () => {
    setBoard(createGameBoard(3));
    setActivePlayer(players[0]);
  };

  const handleEndGame = () => {
    const [gameOver, winner] = checkWin(board);
    if (gameOver && winner) {
      alert(`${activePlayer.name} wins!`);
      restartGame();
    } else if (gameOver) {
      alert("It's a tie!");
      restartGame();
    }
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

  const renderPlayers = () => {
    return (
      <div className="players-container container m-3 p-5">
        <div className="row">
          <div className="col-6 text-end players-info">
            <p>{players[0].name}</p>
            <p>{players[0].mark}</p>
          </div>
          <div className="col-6 text-start players-info">
            <p>{players[1].name}</p>
            <p>{players[1].mark}</p>
          </div>
        </div>
      </div>
    );
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

  return (
    <>
      <div className="container text-center">
        {renderBoard()}
        {renderPlayers()}
      </div>
    </>
  );
};
