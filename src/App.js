import React, { useState } from "react";
import "./App.css";
import Square from "./Square";

function calculateWinner(arr) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return `Player ${arr[a]} wins!`;
    }
  }
  return "Who will win?";
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = () => {
    setBoard(Array(9).fill(""));
    setIsXNext(true);
  };

  return (
    <div className="App">
      <span>{calculateWinner(board)}</span>
      <div className="container">
        {board.map((value, index) => (
          <Square
            key={index}
            squares={board}
            setSquares={setBoard}
            player={isXNext}
            setPlayer={setIsXNext}
            squareValue={value}
            index={index}
          />
        ))}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
