const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const playerOneName = document.querySelector("#nameOne");
const playerTwoName = document.querySelector("#nameTwo");
const startButton = document.querySelector("#start-button");
const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const playerTwoForm = document.querySelector(".playerTwoForm");
const inputContainer = document.querySelector(".input-container");
const noughtsSymbol = document.getElementById("noughts");
const decideButton = document.querySelector(".decide-button");
const humanOrComp = document.querySelector(".human-or-comp-container");

// Create Player Object (Factory)

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
          square.style.color = "red";
          display2.innerText = `${playerTwo.name}'s turn`;
          turn = 1;
          winner();
        } else if (turn === 1 && square.innerText === "") {
          player = playerTwo.type;
          square.innerText = playerTwo.type;
          squareID = event.target.id;
          gameBoardArr[squareID] = playerTwo.type;
          square.style.color = "green";
          display2.innerText = `${playerOne.name}'s turn`;
          turn = 0;
          winner();
        }
      });
    });
  };

  let choiceComp = "";

  decideButton.addEventListener("click", () => {
    choiceComp = document.querySelector(`input[name="humanOrComp"]:checked`).value;
    inputContainer.style.display = "flex";
    humanOrComp.style.display = "none";
  });

  startButton.addEventListener("click", (event) => {
    event.preventDefault();
    playerOne = createPlayer(playerOneName.value, document.querySelector(`input[name="typeSelectOne"]:checked`).value);
    playerTwo = createPlayer(playerTwoName.value, document.querySelector(`input[name="typeSelectTwo"]:checked`).value);
    container.style.display = "grid";
    display.innerText = `${playerOne.name} is ${playerOne.type}'s. ${playerTwo.name} is ${playerTwo.type}'s.`;

    // if (document.querySelector(`input[name="humanOrComp"]:checked`).value === "human") {
    //   humanGame();
    // } else if (document.querySelector(`input[name="humanOrComp"]:checked`).value === "comp") {
    //   computerGame();
    // }

    if (choiceComp === "human") {
      humanGame();
    } else if (choiceComp === "comp") {
      computerGame();
    }
    inputContainer.style.display = "none";
    startButton.style.display = "none";
    display2.innerText = `${playerOne.name}'s turn`;
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
      console.log(squareID);
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
          display2.innerText = "";
        }, 100);
        setTimeout(function () {
          clearBoard();
        }, 1000);
      } else if (gameBoardArr[a] === "X" && gameBoardArr[b] === "X" && gameBoardArr[c] === "X") {
        setTimeout(function () {
          display.innerText = `${playerTwo.name} wins`;
          display2.innerText = "";
        }, 100);
        setTimeout(function () {
          clearBoard();
        }, 1000);
      } else if (gameBoardArr.every((el) => el !== "")) {
        setTimeout(function () {
          display.innerText = "Draw";
          display2.innerText = "";
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
