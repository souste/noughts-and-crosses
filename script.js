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
  const gameBoardArr = ["", "", "", "", "", "", "", "", ""];

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
        squareIDText = square.innerText;
        gameBoardArr[squareID] = playerOne.type;
        console.log(gameBoardArr);
        turn = 1;
        winner();
      } else if (turn === 1 && square.innerText === "") {
        player = playerTwo.type;
        square.innerText = playerTwo.type;
        squareID = event.target.id;
        squareIDText = square.innerText;
        gameBoardArr[squareID] = playerTwo.type;
        console.log(gameBoardArr);
        turn = 0;
        winner();
      }
    });
  });

  const winner = function () {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of winnerLines) {
      const [a, b, c] = line;
      if (gameBoardArr[a] === "0" && gameBoardArr[b] === "0" && gameBoardArr[c] === "0") {
        console.log("Player One Wins");
      } else if (gameBoardArr[a] === "X" && gameBoardArr[b] === "X" && gameBoardArr[c] === "X") {
        console.log("Player Two Wins");
      }
    }
  };

  return { gameBoardArr };
})();
