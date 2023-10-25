const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

// const gameBoard = {
//   gameBoardArr: ["O", "X", "X", "O", "O", "X", "X", "O", "X"],
// };

const gameBoardArr = [];

function createPlayer(name, type) {
  const newPlayer = {};
  newPlayer.userName = name;
  newPlayer.type = type;
  return newPlayer;
}

const playerOne = createPlayer("Player One", "O");
const playerTwo = createPlayer("Player Two", "X");

console.log(playerOne);
console.log(playerTwo);

function addToBoard(item) {
  this.gameBoardArr.push(item);
}

// playerOne.addToBoard("X");

gameBoardArr.push("X");
gameBoardArr.push("O");
gameBoardArr.push("X");

console.log(gameBoardArr);

gameBoardArr.forEach((item, i) => {
  squares[i].textContent = item;
});
