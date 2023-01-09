export function calculateWinner(squares) {
  const winningPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let output = null;
  
  winningPos.forEach((currPos) => {
    if (squares[currPos[0]] != "") {
      let win = true;
      currPos.forEach((index) => {
          if (squares[index] != squares[currPos[0]]) {
            win = false;
          }
      });
      if (win) {
        output = squares[currPos[0]];
      }
    }
  });
  return output;
}
