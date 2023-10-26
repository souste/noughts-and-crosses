const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

function createPlayer(name, type) {
  const newPlayer = {};
  newPlayer.name = name;
  newPlayer.type = type;
  return newPlayer;
}

const playerOne = createPlayer("Player One", "0");
const playerTwo = createPlayer("Player Two", "X");

squares.forEach((square) => {
  square.addEventListener("click", () => {
    square.innerText = "X";
  });
});

const gameBoardArr = [];

function addToBoard(choice, i) {
  gameBoardArr.push(choice);
  gameBoardArr.forEach((item) => {
    squares[i].textContent = item;
  });
}

addToBoard("X", 6);
addToBoard("0", 7);
addToBoard("X", 2);
addToBoard("0", 4);
addToBoard(playerOne.type, 5);
addToBoard(playerTwo.type, 8);

console.log(gameBoardArr);

// NEED TO EVENTUALLY CREATE A NESTED ARRAY AND CORRESPONDING OBJECT?
// const gameBoardArr = [[], [], []];
// then perhaps an object to fill this?
