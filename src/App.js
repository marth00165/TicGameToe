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

      if (playerTurn === 'X') {
        updatePlayerTurn('O');
      } else {
        updatePlayerTurn('X');
      }
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
      {win &&
        (playerTurn === 'X' ? (
          <div className="win-statement"> O Wins!</div>
        ) : (
          <div className="win-statement"> X Wins!</div>
        ))}
      <div className="container">
        <div className="row">
          <div
            className="column"
            onClick={() => clickCell({ row: 0, column: 0 })}
          >
            {gameBoard[0][0]}
          </div>
          <div
            className="column"
            onClick={() => clickCell({ row: 0, column: 1 })}
          >
            {gameBoard[0][1]}
          </div>
          <div
            className="column"
            onClick={() => clickCell({ row: 0, column: 2 })}
          >
            {gameBoard[0][2]}
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            onClick={() => clickCell({ row: 1, column: 0 })}
          >
            {gameBoard[1][0]}
          </div>
          <div
            className="column"
            onClick={() => clickCell({ row: 1, column: 1 })}
          >
            {gameBoard[1][1]}
          </div>
          <div
            className="column"
            onClick={() => clickCell({ row: 1, column: 2 })}
          >
            {gameBoard[1][2]}
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            onClick={() => clickCell({ row: 2, column: 0 })}
          >
            {gameBoard[2][0]}
          </div>
          <div
            className="column"
            onClick={() => clickCell({ row: 2, column: 1 })}
          >
            {gameBoard[2][1]}
          </div>
          <div
            className="column"
            onClick={() => clickCell({ row: 2, column: 2 })}
          >
            {gameBoard[2][2]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
