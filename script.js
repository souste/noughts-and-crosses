const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const playerOneName = document.querySelector("#nameOne");
const playerTwoName = document.querySelector("#nameTwo");
const startButton = document.querySelector("#start-button");
const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const inputContainer = document.querySelector(".input-container");
const noughtsSymbol = document.getElementById("noughts");
const humanOrComp = document.querySelector(".human-or-comp-container");
const playerOneForm = document.querySelector("#player-one-form");
const playerTwoForm = document.querySelector("#player-two-form");
const computerForm = document.querySelector("#computer-form");
const resetButton = document.querySelector(".reset-button");
const playerOnePic = document.querySelector(".player1-display-pic");
const playerTwoPic = document.querySelector(".player2-display-pic");
const compPic = document.querySelector(".comp-display-pic");

const humanButton = document.querySelector(".human-button");
const computerButton = document.querySelector(".computer-button");

// Create Player Object (Factory)humanOrComp

function createPlayer(name, type) {
  const newPlayer = {};
  newPlayer.name = name;
  newPlayer.type = type;
  return newPlayer;
}

let playerOne;
let playerTwo;

// GameBoard (IIFE Module)

const GameBoard = (function () {
  const gameBoardArr = ["", "", "", "", "", "", "", "", ""];

  let squareID = "";

  const computerGame = function () {
    squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        if (square.innerText === "") {
          player = playerOne.type;
          square.innerText = playerOne.type;
          squareID = event.target.id;
          gameBoardArr[squareID] = playerOne.type;
          computerAI();
          winner();
        }
      });
    });
  };

  const humanGame = function () {
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
  };

  let choiceComp = "";

  humanButton.addEventListener("click", () => {
    choiceComp = "human";
    inputContainer.style.display = "flex";
    humanOrComp.style.display = "none";
    playerOneForm.style.display = "flex";
    playerTwoForm.style.display = "flex";
    startButton.style.display = "block";
  });

  computerButton.addEventListener("click", () => {
    choiceComp = "comp";
    inputContainer.style.display = "flex";
    humanOrComp.style.display = "none";
    playerOneForm.style.display = "flex";
    computerForm.style.display = "flex";
    startButton.style.display = "block";
  });

  startButton.addEventListener("click", (event) => {
    event.preventDefault();
    playerOne = createPlayer(playerOneName.value, document.querySelector(`input[name="typeSelectOne"]:checked`).value);
    playerTwo = createPlayer(playerTwoName.value, document.querySelector(`input[name="typeSelectTwo"]:checked`).value);
    container.style.display = "grid";
    resetButton.style.display = "block";
    display.innerText = `${playerOne.name} is ${playerOne.type}'s. ${playerTwo.name} is ${playerTwo.type}'s.`;

    if (choiceComp === "human") {
      playerOnePic.style.display = "block";
      playerTwoPic.style.display = "block";
      humanGame();
    } else if (choiceComp === "comp") {
      playerTwo.name = "Computer";
      display.innerText = `${playerOne.name} is ${playerOne.type}'s. ${playerTwo.name} is ${playerTwo.type}'s.`;
      playerOnePic.style.display = "block";
      compPic.style.display = "block";
      computerGame();
    }
    inputContainer.style.display = "none";
    startButton.style.display = "none";
  });

  resetButton.addEventListener("click", () => {
    playerOne = {};
    playerTwo = {};
    GameBoard.gameBoardArr = ["", "", "", "", "", "", "", "", ""];
    display.innerText = "";
    display2.innerText = "";
    clearBoard();
    container.style.display = "none";
    playerOneForm.style.display = "none";
    playerTwoForm.style.display = "none";
    computerForm.style.display = "none";
    humanOrComp.style.display = "flex";
    playerOneName.value = "";
    playerTwoName.value = "";
    choiceComp = "";
    resetButton.style.display = "none";
    playerOnePic.style.display = "none";
    playerTwoPic.style.display = "none";
    compPic.style.display = "none";
  });

  const computerAI = function () {
    const emptySquares = [];
    for (let i = 0; i < gameBoardArr.length; i++) {
      if (gameBoardArr[i] === "") {
        emptySquares.push(i);
      }
    }
    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const squareID = emptySquares[randomIndex];
      document.getElementById(squareID).innerText = playerTwo.type;
      gameBoardArr[squareID] = playerTwo.type;
    }
  };

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
        }, 200);
        setTimeout(function () {
          display.innerText = `${playerOne.name} is ${playerOne.type}'s. ${playerTwo.name} is ${playerTwo.type}'s.`;
          clearBoard();
        }, 2000);
      } else if (gameBoardArr[a] === "X" && gameBoardArr[b] === "X" && gameBoardArr[c] === "X") {
        setTimeout(function () {
          display.innerText = `${playerTwo.name} wins`;
        }, 200);
        setTimeout(function () {
          display.innerText = `${playerOne.name} is ${playerOne.type}'s. ${playerTwo.name} is ${playerTwo.type}'s.`;
          clearBoard();
        }, 2000);
      } else if (gameBoardArr.every((el) => el !== "")) {
        setTimeout(function () {
          display.innerText = "Draw";
        }, 200);
        setTimeout(function () {
          display.innerText = `${playerOne.name} is ${playerOne.type}'s. ${playerTwo.name} is ${playerTwo.type}'s.`;
          clearBoard();
        }, 2000);
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
