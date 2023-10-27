const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

// Create Player Object (Factory)

function createPlayer(name, type, score) {
  const newPlayer = {};
  newPlayer.name = name;
  newPlayer.type = type;
  newPlayer.score = score;
  return newPlayer;
}

const playerOne = createPlayer("Player One", "0", 0);
const playerTwo = createPlayer("Player Two", "X", 0);

// GameBoard (IIFE Module)

const GameBoard = (function () {
  const gameBoardArr = [];

  const addToBoard = function (choice, i) {
    gameBoardArr.push(choice);
    gameBoardArr.forEach((item) => {
      squares[i].textContent = item;
    });
  };
  return { gameBoardArr, addToBoard };
})();

GameBoard.addToBoard("X", 6);
GameBoard.addToBoard("0", 7);
GameBoard.addToBoard("X", 2);
GameBoard.addToBoard("0", 4);
GameBoard.addToBoard(playerOne.type, 5);
GameBoard.addToBoard(playerTwo.type, 8);

console.log(GameBoard.gameBoardArr);

// Square event listener functionality//////////////////////////////////////////////////////////

// squares.forEach((square) => {
//   square.addEventListener("click", () => {
//     if (gameBoardArr[gameBoardArr.length - 1] === playerOne.type) {
//       gameBoardArr.push(playerTwo.type);
//       square.innerText = playerTwo.type;
//       console.log(gameBoardArr);
//     } else {
//       gameBoardArr.push(playerOne.type);
//       square.innerText = playerOne.type;
//       console.log(gameBoardArr);
//     }
//   });
// });

// console.log(gameBoardArr[gameBoardArr.length - 1]);
//////////////////////////////////////////////////////////////////////////////////////////////////

// NEED TO EVENTUALLY CREATE A NESTED ARRAY AND CORRESPONDING OBJECT?
// const gameBoardArr = [[], [], []];
// then perhaps an object to fill this?
