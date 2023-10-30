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

  const addToBoard = function (choice, index) {
    gameBoardArr.push(choice);
    gameBoardArr.forEach((item) => {
      squares[index].textContent = item;
    });
  };

  return { addToBoard, gameBoardArr };
})();

// const winner = function () {
//   if (
//     testGameBoardArr[0][0] === "X" &&
//     testGameBoardArr[0][1] === "X" &&
//     testGameBoardArr[0][2] === "X"
//   ) {
//     console.log("Well done you are the winner!");
//   }
// };

// winner();

const testGameBoardArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

let squareID = "";

squares.forEach((square) => {
  square.addEventListener("click", (event) => {
    square.innerText = "X";
    squareID = event.target.id;

    addToArray(squareID);
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
    testGameBoardArr[indices[0]][indices[1]] = "X";
    console.log(testGameBoardArr);
    winner();
  }
}

const winner = function () {
  if (
    testGameBoardArr[0][0] === "X" &&
    testGameBoardArr[0][1] === "X" &&
    testGameBoardArr[0][2] === "X"
  ) {
    console.log("Well done you are the winner!");
  }
};
