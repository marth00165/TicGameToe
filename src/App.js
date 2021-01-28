import { useState } from 'react';
import './App.css';

const App = () => {
  const [gameBoard, updateGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [win, updateWin] = useState(false);

  const [playerTurn, updatePlayerTurn] = useState('X');

  const clickCell = ({ row, column }) => {
    if (!gameBoard[row][column] && !win) {
      let dummyBoard = JSON.parse(JSON.stringify(gameBoard));

      dummyBoard[row][column] = playerTurn;

      updateGameBoard(dummyBoard);

      checkWinCondition(dummyBoard);
    }
  };

  const checkWinCondition = (board) => {
    if (
      board[0][0] === board[0][1] &&
      board[0][1] === board[0][2] &&
      board[0][0] !== null
    ) {
      updateWin(true);
    } else if (
      board[1][0] === board[1][1] &&
      board[1][1] === board[1][2] &&
      board[1][0] !== null
    ) {
      updateWin(true);
    } else if (
      board[2][0] === board[2][1] &&
      board[2][1] === board[2][2] &&
      board[2][0] !== null
    ) {
      updateWin(true);
    } else if (
      board[0][0] === board[1][0] &&
      board[1][0] === board[2][0] &&
      board[0][0] !== null
    ) {
      updateWin(true);
    } else if (
      board[0][1] === board[1][1] &&
      board[1][1] === board[2][1] &&
      board[0][1] !== null
    ) {
      updateWin(true);
    } else if (
      board[0][2] === board[1][2] &&
      board[1][2] === board[2][2] &&
      board[0][2] !== null
    ) {
      updateWin(true);
    } else if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== null
    ) {
      updateWin(true);
    } else if (
      board[2][0] === board[1][1] &&
      board[1][1] === board[0][2] &&
      board[2][0] !== null
    ) {
      updateWin(true);
    } else {
      if (playerTurn === 'X') {
        updatePlayerTurn('O');
      } else {
        updatePlayerTurn('X');
      }
    }
  };
  /*
   - Player Turns

   - Click set O/X

   - Coordinate the click to position in 2d array

   - updated values on the board to reflect state

   - Once clicked it cant be changed
  */

  return (
    <div>
      {win && <div className="win-statement"> {playerTurn} Wins!</div>}
      <div className="container">
        {gameBoard.map((row, rowIdx) => (
          <div key={`row - ${rowIdx}`} className="row">
            {row.map((_, colIdx) => (
              <div
                key={`col - ${rowIdx}/${colIdx}`}
                className="column"
                onClick={() => clickCell({ row: rowIdx, column: colIdx })}
              >
                {gameBoard[rowIdx][colIdx]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
