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
  let turn = 0;
  let player = "";
  // need to program this into start screen

  squares.forEach((square) => {
    square.addEventListener("click", (event) => {
      if (turn == 0 && square.innerText === "") {
        player = playerOne.type;
        square.innerText = playerOne.type;
        squareID = event.target.id;
        addToArray(squareID, player);
        turn = 1;
        winner(squareID);
      } else if (turn === 1 && square.innerText === "") {
        player = playerTwo.type;
        square.innerText = playerTwo.type;
        squareID = event.target.id;
        addToArray(squareID, player);
        turn = 0;
        winner(squareID);
      }
    });
  });

  function addToArray(squareID) {
    let indexObj = {
      0: [0, 0],
      1: [0, 1],
      2: [0, 2],
      3: [1, 0],
      4: [1, 1],
      5: [1, 2],
      6: [2, 0],
      7: [2, 1],
      8: [2, 2],
    };

    const indices = indexObj[squareID];
    if (indices) {
      if (player === playerOne.type) {
        gameBoardArr[indices[0]][indices[1]] = "0";
        console.log(gameBoardArr);
      } else if (player === playerTwo.type) {
        gameBoardArr[indices[0]][indices[1]] = "X";
        console.log(gameBoardArr);
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
