// Define a function to create players
export default function createPlayers(
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
