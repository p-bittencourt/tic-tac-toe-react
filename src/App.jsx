import "./assets/styles/css/Styles.css";
import { GameBoard } from "./assets/components/GameBoard";

function App() {
  return (
    <>
      <div className="container text-center">
        <h1 className="m-4">Tic Tac Toe</h1>
        <GameBoard></GameBoard>
      </div>
    </>
  );
}

export default App;
