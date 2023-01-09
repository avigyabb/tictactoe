import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  let nextVar = "X"
  if (!xIsNext) {
    nextVar = "O"
  }
  const [curState, setCurState] = useState(null)

  const handleClick = (i) => {
    if (!curState) {
      if (board[i] == "") {
        const tempBoard = board
        if (xIsNext) {
          tempBoard[i] = "X"
        } else {
          tempBoard[i] = "O"
        }
        setXIsNext(!xIsNext);
        setBoard(tempBoard)
        setStepNumber(stepNumber + 1)
        setCurState(calculateWinner(board))
      }
    }
  };

  const jumpToStart = () => {
    setXIsNext(true)
    setBoard(["", "", "", "", "", "", "", "", ""])
    setStepNumber(0)
    setCurState(null)
  }

  const result = () => {
    if (curState == "X") {
      return "Winner: X"
    } else if (curState == "O") {
      return "Winner: O"
    } else if (stepNumber == 9) {
      return "Tie Game"
    } else if (xIsNext) {
      return "Next Player: X"
    } else {
      return "Next Player: O"
    }
  }

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div className='info-wrapper'>
          <div>
            <button onClick={jumpToStart}>Go to Start</button>
          </div>
          <h1>{result()}</h1>
      </div>
    </div>
  );
};

export default Game;
