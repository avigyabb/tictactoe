import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => {
  const squaresArray = squares.map((val, i) => <Square value={val} onClick={() => onClick(i)} />);
  return (
    <div className="board"> {squaresArray} </div>
  );
};

export default Board;
