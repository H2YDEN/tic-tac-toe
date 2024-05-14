import React from "react";

const Square = (props) => {
  console.log(props.squares, props.player);

  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        const newSquares = [...props.squares];
        newSquares[props.index] = "X";
        props.setSquares(newSquares);
        props.setPlayer(false);
      } else {
        const newSquares = [...props.squares];
        newSquares[props.index] = "O";
        props.setSquares(newSquares);
        props.setPlayer(true);
      }
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? "O" : props.squareValue}
    </div>
  );
};

export default Square;
