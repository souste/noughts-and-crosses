const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const playerOneName = document.querySelector("#nameOne");
const playerTwoName = document.querySelector("#nameTwo");
const submitButton = document.querySelector("#submit-button");

let playerOne;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  playerOne = createPlayer(playerOneName.value, document.querySelector(`input[name="typeSelectOne"]:checked`).value);
  playerTwo = createPlayer(playerTwoName.value, document.querySelector(`input[name="typeSelectTwo"]:checked`).value);

  console.log("inside", playerOne);
  console.log("inside", playerTwo);
});

console.log("outside", playerOne);

// Create Player Object (Factory)

function createPlayer(name, type) {
  const newPlayer = {};
  newPlayer.name = name;
  newPlayer.type = type;
  return newPlayer;
}

// GameBoard (IIFE Module)

const GameBoard = (function () {
  const gameBoardArr = ["", "", "", "", "", "", "", "", ""];

  let squareID = "";
  let turn = 0;

  squares.forEach((square) => {
    square.addEventListener("click", (event) => {
      if (turn == 0 && square.innerText === "") {
        player = playerOne.type;
        square.innerText = playerOne.type;
        squareID = event.target.id;
        gameBoardArr[squareID] = playerOne.type;
        turn = 1;
        winner();
      } else if (turn === 1 && square.innerText === "") {
        player = playerTwo.type;
        square.innerText = playerTwo.type;
        squareID = event.target.id;
        gameBoardArr[squareID] = playerTwo.type;
        turn = 0;
        winner();
      }
    });
  });

  const winner = function () {
    // need DRAW functionality
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
        setTimeout(function () {
          alert(`${playerOne.name} wins`);
        }, 1);
        setTimeout(function () {
          clearBoard();
        }, 1);
      } else if (gameBoardArr[a] === "X" && gameBoardArr[b] === "X" && gameBoardArr[c] === "X") {
        setTimeout(function () {
          alert(`${playerTwo.name} wins`);
        }, 1);
        setTimeout(function () {
          clearBoard();
        }, 1);
      } else if (gameBoardArr.every((el) => el !== "")) {
        setTimeout(function () {
          alert("Draw");
        }, 1);
        setTimeout(function () {
          clearBoard();
        }, 1);
        return;
      }
    }
  };

  const clearBoard = function () {
    for (let i = 0; i < gameBoardArr.length; i++) {
      gameBoardArr[i] = "";
    }
    squares.forEach((square) => (square.innerText = ""));
  };

  return { gameBoardArr };
})();
