const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const playerOneName = document.querySelector("#nameOne");
const playerTwoName = document.querySelector("#nameTwo");
const startButton = document.querySelector("#start-button");
const display = document.querySelector(".display");

// Create Player Object (Factory)

function createPlayer(name, type) {
  const newPlayer = {};
  newPlayer.name = name;
  newPlayer.type = type;
  return newPlayer;
}

let playerOne;
let playerTwo;

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  playerOne = createPlayer(playerOneName.value, document.querySelector(`input[name="typeSelectOne"]:checked`).value);
  playerTwo = createPlayer(playerTwoName.value, document.querySelector(`input[name="typeSelectTwo"]:checked`).value);
  container.style.display = "grid";
  display.innerText = `${playerOne.name} is ${playerOne.type}'s. ${playerTwo.name} is ${playerTwo.type}'s.`;
});

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
        computerAI();
        // turn = 1;
        winner();
      } else if (turn === 1 && square.innerText === "") {
        // player = playerTwo.type;
        // square.innerText = playerTwo.type;
        // squareID = event.target.id;
        // gameBoardArr[squareID] = playerTwo.type;
        // turn = 0;
        // winner();
      }
    });
  });

  const computerAI = function () {
    if (document.getElementById("0").innerText === playerOne.type) document.getElementById("1").innerText = playerTwo.type;
    if (document.getElementById("3").innerText === playerOne.type) document.getElementById("4").innerText = playerTwo.type;
    if (document.getElementById("6").innerText === playerOne.type) document.getElementById("7").innerText = playerTwo.type;
  };

  // squares.forEach((square) => {
  //   square.addEventListener("click", (event) => {
  //     if (turn == 0 && square.innerText === "") {
  //       player = playerOne.type;
  //       square.innerText = playerOne.type;
  //       squareID = event.target.id;
  //       gameBoardArr[squareID] = playerOne.type;
  //       turn = 1;
  //       winner();
  //     } else if (turn === 1 && square.innerText === "") {
  //       player = playerTwo.type;
  //       square.innerText = playerTwo.type;
  //       squareID = event.target.id;
  //       gameBoardArr[squareID] = playerTwo.type;
  //       turn = 0;
  //       winner();
  //     }
  //   });
  // });

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
        setTimeout(function () {
          display.innerText = `${playerOne.name} wins`;
        }, 100);
        setTimeout(function () {
          clearBoard();
        }, 1000);
      } else if (gameBoardArr[a] === "X" && gameBoardArr[b] === "X" && gameBoardArr[c] === "X") {
        setTimeout(function () {
          display.innerText = `${playerTwo.name} wins`;
        }, 100);
        setTimeout(function () {
          clearBoard();
        }, 1000);
      } else if (gameBoardArr.every((el) => el !== "")) {
        setTimeout(function () {
          display.innerText = "Draw";
        }, 100);
        setTimeout(function () {
          clearBoard();
        }, 1000);
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
