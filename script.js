const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

// Create Player Object (Factory)

function createPlayer(name, type) {
  const newPlayer = {};
  newPlayer.name = name;
  newPlayer.type = type;
  return newPlayer;
}

const playerOne = createPlayer("Player One", "0");
const playerTwo = createPlayer("Player Two", "X");

// GameBoard (IIFE Module)

const GameBoard = (function () {
  const gameBoardArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let squareID = "";

  let turn = 1;
  let player = "";
  // need to program this into start screen

  squares.forEach((square) => {
    square.addEventListener("click", (event) => {
      if (turn == 0) {
        player = playerOne.type;
        square.innerText = playerOne.type;
        squareID = event.target.id;
        addToArray(squareID, player);
        turn = 1;
      } else if (turn === 1) {
        player = playerTwo.type;
        square.innerText = playerTwo.type;
        squareID = event.target.id;
        addToArray(squareID, player);
        turn = 0;
      }
    });
  });

  function addToArray(squareID) {
    let indexObj = {
      square0: [0, 0],
      square1: [0, 1],
      square2: [0, 2],
      square3: [1, 0],
      square4: [1, 1],
      square5: [1, 2],
      square6: [2, 0],
      square7: [2, 1],
      square8: [2, 2],
    };

    const indices = indexObj[squareID];
    if (indices) {
      if (player === playerOne.type) {
        gameBoardArr[indices[0]][indices[1]] = "0";
        console.log(gameBoardArr);
        winner();
      } else if (player === playerTwo.type) {
        gameBoardArr[indices[0]][indices[1]] = "X";
        console.log(gameBoardArr);
        winner();
      }
    }
  }

  const winner = function () {
    if (
      gameBoardArr[0][0] === "X" &&
      gameBoardArr[0][1] === "X" &&
      gameBoardArr[0][2] === "X"
    ) {
      console.log("Well done Player Two is the winner!");
    }
  };

  return { addToArray, gameBoardArr };
})();
