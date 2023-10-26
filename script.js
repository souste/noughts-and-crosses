const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

// Create Player Object

function createPlayer(name, type) {
  const newPlayer = {};
  newPlayer.name = name;
  newPlayer.type = type;
  return newPlayer;
}

const playerOne = createPlayer("Player One", "0");
const playerTwo = createPlayer("Player Two", "X");

// Square event listener functionality

const gameBoardArr = ["X", "0"];

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (gameBoardArr[gameBoardArr.length - 1] === playerOne.type) {
      gameBoardArr.push(playerTwo.type);
      square.innerText = playerTwo.type;
    } else {
      gameBoardArr.push(playerOne.type);
      square.innerText = playerOne.type;
    }
  });
});

console.log(gameBoardArr[gameBoardArr.length - 1]);

// Add to Board Functionality - need to combine with player alternation object, then combine with the above

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
